const User = require('../models/User');

exports.handleUserFind = (req, res) => {
  User.findOne({ where: { userId: req.body.userId } }).then(user => {
    res.send(user);
  });
};

exports.handleUpdateUser = (req, res) => {
  User.findOne({ where: { userId: req.body.userId } })
    .then(user => {
      const newData = {
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        email: req.body.email || user.email,
      };
      User.update(newData, { where: { userId: req.body.userId } })
        .then(result => res.send(result))
        .catch(err => console.log('error updating user', err));
    })
    .catch(err => console.log('error updating user', err));
};
