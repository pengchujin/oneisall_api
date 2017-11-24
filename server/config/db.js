const Sequelize = require('sequelize');

const One = new Sequelize('one', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    define: {
        timestamps: false
    }
});

module.exports = {
        One
}
