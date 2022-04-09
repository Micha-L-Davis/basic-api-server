const { sequelize } = require('./models');
const server = require('./src/server.js');

sequelize.sync()
  .then(() => {
    server.start(process.env.PORT || 3001);
    console.log('Success!!!');
  })
  .catch(error => {
    console.log(error);
  });
