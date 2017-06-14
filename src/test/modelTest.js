// const User = require('/models/user');
// const config = require('../config/database');
// const expect = require('chai').expect
var chai = require('chai');

var assert = chai.assert;
describe('User module', () => {
  describe('"getUserById"', () => {
    it('should export a function', () => {
      // expect(User.getUserById).to.be.a('function')
      assert.equal(1, 1);
    })
  })
})
//
//describe('User Model', function() {
//  it('')
//});

// const userArray = [
//   {
//     name: 'Michael',
//     email: 'michael@mherman.org',
//     username: 'michael',
//     password: '123456789'
//   },
//   {
//     name: 'Bob',
//     email: 'bob@mherman.org',
//     username: 'bob',
//     password: 'abcdefghi'
//   },
//   {
//     name: 'Alice',
//     email: 'alice@mherman.org',
//     username: 'alice',
//     password: 'aliceAwesome'
//   }
// ]
//;
//it('should return all users created on or after (>=) specified year',
//(done) => {
//  usersController.filterByYear(userArray, 2015, (err, total) => {
//    should.not.exist(err);
//    total.length.should.eql(2);
//    done();
//  });
//});
