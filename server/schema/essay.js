/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('essay', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    author_it: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    author_img: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'essay'
  });
};
