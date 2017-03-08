module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', 
  // columns of table
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATEONLY,
    }
  });
  return User;
};