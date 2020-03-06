exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
            tbl.increments()
            tbl.string('username',128)
            .notNullable()
            .unique()
            tbl.string('password', 128).notNullable();
            tbl.string("name",128)
                .notNullable()
            tbl.string('email')
                .unique()
                .notNullable()
        })
        .createTable('sleepData', tbl => {
            tbl.increments()
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('date')
                .notNullable()
            tbl.integer('sleepStart')
                .notNullable()
            tbl.integer('sleepEnd')
                .notNullable()
            tbl.integer('moodMorning')
                .notNullable()
            tbl.integer('moodMidday')
                .notNullable()
            tbl.integer('moodNight')
                .notNullable()
        })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('sleepData')
    .dropTableIfExists('users')
  };