module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', 
  // columns of table
  {
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
    }
  });
  return Category;
};