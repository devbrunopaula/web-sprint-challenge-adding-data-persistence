module.exports = {
  client: 'postgresql',
  connection: {
    database: 'addindDataAPI',
    user: 'postgres',
    password: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds/dev',
  },
}
