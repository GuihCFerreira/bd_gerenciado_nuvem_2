const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'postgres', //mudar para mysql 
    port: 5432,
    host: '0.0.0.0', //Colocar o IP do banco principal (write)
    logging: false,
    replication: {
        read: [
          {
            host: '0.0.0.0',  //Colocar o IP do banco secundário (read)
            username: 'postgres', //Colocar o usuário do banco secundário (read)
            password: 'postgres', //Colocar a senha do banco secundário (read) 
          },
        ],
        write: {
          host: '0.0.0.0', //Colocar o IP do banco principal (write)
          username: 'postgres', //Colocar o usuário do banco principal (write)
          password: 'postgres', //Colocar a senha do banco principal (write)
        },
      },
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      dialectOptions: {
        useUTC: false, 
      },
      timezone: '-03:00', 
};

//Colocar na ordem o nome do BD, Usuário e Senha
const sequelize = new Sequelize('aula', 'postgres', 'postgres', sequelizeConfig);

module.exports = sequelize;