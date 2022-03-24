'use strict';

function validate(request, response, next) {
  if (!request.query.name) {
    response.status('500').send('Invalid query; a person or place must have a name.');
  } else {
    response.status = '200';
  }
  next();
}

module.exports = validate;
