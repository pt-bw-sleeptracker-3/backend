exports.up = function(knex) {
    return ( 
        knex.schema.createTable('users', tbl => {
            tbl.increments()
            tbl.string('username',128)
            .notNullable()
            .unique()
            tbl.string('password', 128).notNullable();
            tbl.integer('sleepData_id')
            tbl.string("name",128)
                .notNullable()
            tbl.string('email')
                .unique()
                .notNullable()
        })
        .createTable('sleepData', tbl => {
            tbl.increments()
            tbl.integer('user_id')
                // .references('sleepData_id')
                // .inTable('users')
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
    )
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExist('sleepData')
      .dropTableIfExist('users')
  };