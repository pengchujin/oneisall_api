/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    q_content: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    a_content: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    guide: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    a_author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'question'
  });
};
