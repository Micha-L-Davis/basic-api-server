const { sequelize } = require('./models');

sequelize.sync()
  .then(() => {
    console.log('Success!!!');
  })
  .catch(error => {
    console.log(error);
  });
