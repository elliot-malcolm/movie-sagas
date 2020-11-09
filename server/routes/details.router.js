// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool')

// router.get('/:id', (req, res) => {
//     console.log(req.body);
//     const queryText = `SELECT * FROM "movies";`;
                        // JOIN 
//     pool.query(queryText, [req.params.id])
//     .then(result => {
//       res.send(result.rows);  
//     }).catch(error => {
//       console.log(error);
//       res.sendStatus(500);
//     });
//   });
// module.exports = router;