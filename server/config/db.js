const Sequelize = require('sequelize');

const One = new Sequelize('mysql://root:123456@localhost/one',{
    define: {
        timestamps: false
    }
})

module.exports = {
        One
}