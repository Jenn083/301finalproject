'use strict';

const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.use(express.static('./public'));


//Routes for requesting HTML resources
app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
// app.get('/new', (request, response) => response.sendFile('new.html', {root: '.'}));

//This is a new route that will utilize our middle man proxy.
app.get('/resource/*', proxyKingCounty);

//This is a new proxy method which acts as a 'middle man' (middleware) for our request.
function proxyKingCounty (request, response) {
  console.log('Routing King County request for', request.params[0]);
  (requestProxy({
    url: `https://data.kingcounty.gov/resource/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.KINGCOUNTY_TOKEN}`}
  }))(request, response); //<--requestProxy is immediately invoked and returns a function
}

//Routes for making API calls to enact CRUD Operations on our database
app.get('/feedback/all', (request, response) => {
  let client = new pg.Client(conString);

  client.connect(err => {
    if (err) console.error(err);
    client.query(
      `SELECT * FROM feedback`,
      (err, result) => {
        if (err) console.error(err);
        response.send(result);
        client.end();
      }
    );
  });
});

app.post('/feedback/insert', (request, response) => {
  let client = new pg.Client(conString);
  client.query(
    `INSERT INTO
    feedback(author, message)
    VALUES ($1, $2);`,
    [
      request.body.author,
      request.body.message,
    ]
  );

  client.connect();
  response.send('insert complete');
});

app.put('/feedback/update', (request, response) => {
  let client = new pg.Client(conString);

  client.query(
    `UPDATE feedback
    SET author=$1, message=$2,
    WHERE feedback_id=$3;`,
    [
      request.body.author,
      request.body.message,
      request.body.feedback_id
    ]
  );

  client.connect();
  response.send('insert complete');
});

app.delete('/feedback/delete', (request, response) => {
  let client = new pg.Client(conString);

  client.connect(err => {
    if (err) console.error(err);

    client.query(
      `DELETE FROM feedback WHERE feedback_id=${request.body.feedback_id};`,
      err => {
        if (err) console.error(err);
        client.end();
      }
    );
  });
  response.send('Delete complete');
});

app.delete('/feedback/truncate', (request, response) => {
  let client = new pg.Client(conString);

  client.connect(err => {
    if (err) console.error(err);

    client.query(
      'DELETE FROM feedback;',
      err => {
        if (err) console.error(err);
        client.end();
      }
    );
  });
  response.send('Truncate complete');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
