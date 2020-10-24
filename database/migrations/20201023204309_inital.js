exports.up = async function (knex) {
  await knex.schema.createTable('project', (table) => {
    table.increments()
    table.varchar('name', 255).notNull()
    table.varchar('description', 255)
    table.boolean('completed').notNull().defaultTo(false)
    table.timestamps(true, true)
  })

  await knex.schema.createTable('resource', (table) => {
    table.increments()
    table.varchar('name', 255).notNull().unique()
    table.varchar('description', 255)
  })
  await knex.schema.createTable('task', (table) => {
    table.increments()
    table.varchar('description', 255).notNull()
    table.varchar('notes', 255)
    table.boolean('completed').notNull().defaultTo(false)
  })

  await knex.schema.createTable('project_resource', (table) => {
    table.increments()
    table
      .integer('project_id')
      .references('id')
      .inTable('project')
      .unsigned()
      .notNull()
    table
      .integer('resource_id')
      .references('id')
      .inTable('resource')
      .unsigned()
      .notNull()
  })
}

exports.down = async function (knex) {}
