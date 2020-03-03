const db = require("../data/db-config.js");


function find() {
    return db("users");
}

function findSleepData() {
    return db("sleepData");
}

function findById(id) {
    return db("users").where({ id });
}

function findByIdSleepData(id) {
    return db("sleepData").where({ id });
}

function findSteps(id) {
    return db("users as u").join("sleepData as sd", "sd.id", "sd.user_id")
    .where( "u.id", id )
    .select("sd.sleepData_id")
}

function add(userData) {
    return db("users").insert(userData);
}

function addSleepData(sleepData) {
    return db("sleepData").insert(sleepData);
}

function update(id, user) {
    return db('users')
      .where('id', Number(id))
      .update(user);
  }

function updateSleepData(id, data) {
    return db('sleepData')
      .where('id', Number(id))
      .update(data);
  }

function remove(id) {
    return db("users").where({ id }).del();
}

function removeSleepData(id) {
    return db("sleepData").where({ id }).del();
}

function findBy(filter) {
    console.log(filter);
    return db('users')
      .select('id', 'username', 'password')
      .where(filter);
  }

function findByUsername(username) {
    return db('users').where({username}).first()
}

module.exports = {
    find,
    findSleepData,
    findBy,
    findById,
    findByIdSleepData,
    findSteps,
    findByUsername,
    add,
    addSleepData,
    update,
    updateSleepData,
    remove,
    removeSleepData
};