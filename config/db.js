const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'mysql', //mudar para mysql 
    port: 3306,
    host: '35.193.202.55', //Colocar o IP do banco principal (write)
    logging: false,
    replication: {
        read: [
          {
            host: '34.41.249.125',  //Colocar o IP do banco secundário (read)
            username: 'usr_lucas', //Colocar o usuário do banco secundário (read)
            password: 'b^ZS0RQ3dYF10L-(', //Colocar a senha do banco secundário (read) 
          },
        ],
        write: {
          host: '35.193.202.55', //Colocar o IP do banco principal (write)
          username: 'usr_lucas', //Colocar o usuário do banco principal (write)
          password: 'b^ZS0RQ3dYF10L-(', //Colocar a senha do banco principal (write)
        },
      },
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      // dialectOptions: {
      //   useUTC: false, 
      // },
      timezone: '-03:00', 
};

//Colocar na ordem o nome do BD, Usuário e Senha
const sequelize = new Sequelize('aula', 'usr_lucas', 'b^ZS0RQ3dYF10L-(', sequelizeConfig);

module.exports = sequelize;