const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    console.log('loggin in ', request.body);
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        return User.validatePassword(password, user.password).then(isValid => {
          if (!isValid) {
            throw new Error();
          }

          // login
          completeLogin(request, response, user);
        });
      })
      .catch(error => {
        console.log(error);

        response
          .status(Http.Unauthorized)
          .json('email/password combo not found');
      });
  },
  register(request, response) {
    console.log('registering', request.body);
    User.create(request.body)
      .then(user => {
        console.log('created user', user);

        // login
        completeLogin(request, response, user);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  logout(request, response) {
    console.log('logging out');

    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};

function completeLogin(request, response, user) {
  console.log('completing login', user);
  user = user.toObject();

  delete user.password;

  request.session.user = user;

  response.cookie('userID', user._id);
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
