// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Incident extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Incident.init({
//     type: DataTypes.STRING,
//     description: DataTypes.STRING,
//     lat: DataTypes.DOUBLE,
//     lng: DataTypes.DOUBLE,
//     photo: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Incident',
//   });
//   return Incident;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Incident= sequelize.define('Incident', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    photo: DataTypes.STRING
    
    }, {});
  Incident.associate = function(models) {
    // associations can be defined here
  };
  return Incident;
};