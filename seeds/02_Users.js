
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'A', email:'a@gmail.com', password:'a12345'},
        {name: 'B', email:'b@gmail.com', password:'b12345'},
        {name: 'C', email:'c@gmail.com', password:'c12345'}
      ]);
    });
};
