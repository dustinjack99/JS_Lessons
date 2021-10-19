module.exports = (app) => {
  const router = require("express").Router();
  const gigController = require("../controllers/gig.controller");
  const Sequelize = require("sequelize");
  const Op = Sequelize.Op;

  // view routes
  router.get("/", (req, res) => {
    res.render("index");
  });
  router.get("/gigs", (req, res) => {
    res.render("gigs");
  });
  router.get("/gigs/add", (req, res) => {
    res.render("add");
  });

  // Gigs Database Routes

  // CREATE method
  router.post("/gigs/add", gigController.createGig);
  // READ method
  router.get("/published", gigController.findPublishedGigs);
  router.get("/:id", gigController.findOnePublisedGig);

  // UPDATE method
  router.get("/search", (req, res) => {
    const { term } = req.query;

    gigController
      .findAll({ where: { technologies: { [Op.like]: "%" + term + "%" } } })
      .then((gigs) => res.render("gigs"))
      .catch((err) => console.log(err));
  });

  // UPDATE method

  //DELETE method
  app.use("/", router);
};
