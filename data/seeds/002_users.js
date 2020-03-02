

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'hello', password: "world", name: 'hi', email: 'hi@helloworld.com' }
      ]);
    });
};