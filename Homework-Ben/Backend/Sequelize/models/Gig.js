module.exports = (sequelize, DataTypes) => {
  const Gig = sequelize.define("Gig", {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    description: DataTypes.STRING,
    budget: DataTypes.STRING,
    contact_email: DataTypes.STRING,
  });
  return Gig;
};
