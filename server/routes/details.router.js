const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    console.log(req.body);
    let movieId = req.params.id
    const queryText = `SELECT * FROM "movies";;
    SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genres_id"
    WHERE "movies"."id" = $1;`;
    pool.query(queryText, [movieId])
    .then(result => {res.send(result.rows);})
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
  });
module.exports = router;