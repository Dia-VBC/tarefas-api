exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("tasks", function(table) {
    // chave primária
    table.increments("oid");

    // estrutura
    table.string("title", 50).notNullable();
    table.string("description", 250).notNullable();
    table.boolean("deleted");
    table.boolean("done");

    // timestamp
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  })
  .createTable("users", function(table){
    // chave primária
    table.increments("oid");
    
    // estrutura
    table.string("name", 50).notNullable();
    table.string("email", 100).notNullable();
    table.string("password", 20).notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tasks").dropTableIfExists("users");
};
