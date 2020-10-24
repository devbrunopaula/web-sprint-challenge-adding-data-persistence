exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          project_id: 1,
          description: 'Cover The Plants',
          notes: 'I need to purchase more bleach.',
        },
        {
          project_id: 2,
          description: 'Move the cars',
          notes: 'park all vehicles inside the garage',
        },
        {
          project_id: 3,
          description: 'Go to Home Depot to get the paing',
          notes: 'bedrom color #34993A',
        },
      ])
    })
}
