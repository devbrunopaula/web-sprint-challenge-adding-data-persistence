exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Sanding', description: 'scrape and sand all the old paing'},
        {name: 'House Wash', description: 'Wash the house prior to paint'},
        {name: 'Paint the House', description: 'Spray Paint the house'},
      ])
    })
}
