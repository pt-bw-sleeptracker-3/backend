const db = require("../data/db-config.js");


function find() {
    return db("users");
}

function findById(id) {
    return db("users").where({ id });
}

function findSteps(id) {
    return db("users as u").join("sleepData as sd", "sd.id", "sd.user_id")
    .where( "u.id", id )
    .select("sd.sleepData_id")
}

function add(userData) {
    return db("users").insert(userData);
}

function update(changes, id) {
    return db("users").where({ id }).update(changes);
}

function remove(id) {
    return db("users").where({ id }).del();
}

function findBy(filter) {
    console.log(filter);
    return db('users')
      .select('id', 'username', 'password')
      .where(filter);
  }

module.exports = {
    find,
    findBy,
    findById,
    findSteps,
    add,
    update,
    remove
};