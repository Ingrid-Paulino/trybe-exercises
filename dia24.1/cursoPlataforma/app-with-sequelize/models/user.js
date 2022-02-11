const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  }, {
    timestamps: false //como n vou usar os dois campos "createdAt e updatedAt" preciso passar aqui como false
    
  });

  return User;
}