// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Users.init({
//     name: DataTypes.STRING,
//     cid: DataTypes.STRING,
//     password: DataTypes.STRING,
//     type: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };


'use strict';
module.exports = (sequelize, DataTypes) => {
  const User= sequelize.define('User', {
    name: DataTypes.STRING,
    cid: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING
    
    }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};