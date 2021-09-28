module.exports = (sqeuelize, DataTypes) => {
  const Gig = sqeuelize.define("Gig", {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    description: DataTypes.STRING,
    budget: DataTypes.STRING,
    contact_email: DataTypes.STRING,
  });

  return Gig;
};
