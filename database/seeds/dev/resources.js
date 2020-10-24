exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Power Washer', description: '4000 psi Honda Powerwasher'},
        {name: 'Paint Sprayer', description: 'Wagner Finish paint sprayer'},
        {
          name: 'Orbital Sander',
          description: 'Dewalt 9000Grid orbial palm sander',
        },
      ])
    })
}
