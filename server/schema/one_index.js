/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('one_index', {
    vol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    img_url: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    img_author: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    img_kind: {
      type: DataTypes.STRING(20),
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
    word: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    word_from: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'one_index'
  });
};
