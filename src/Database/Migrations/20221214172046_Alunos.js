/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("Alunos", function (table) {
    table.increments('id');
    table.string('Nome',255).notNullable();
    table.integer('Idade').notNullable();
    table.integer('NumChamada').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Alunos');
};
