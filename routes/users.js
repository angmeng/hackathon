var express = require('express');
var router = express.Router();
const Models = require("../models")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    // await Models.User.create({
    //   firstName: "John",
    //   lastName: "Doe",
    //   email: "john_doe@gmail.com"
    // })
    const users = await Models.User.findAll();
    // res.send(`There are ${userCount} users in the database.`);
    res.send({data: users});
  } catch (error) {
    res.send(`Unable to connect to the database:${error}`);
  }
  
});

module.exports = router;
