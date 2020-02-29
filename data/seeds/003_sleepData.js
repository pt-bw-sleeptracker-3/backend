

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sleepData').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sleepData').insert([
        { id: 1, user_id: 1, date: '2/28/20', sleepStart: 12, sleepEnd: 24, moodMorning: 2, moodMidday: 2, moodNight: 4 }
      ]);
    });
};