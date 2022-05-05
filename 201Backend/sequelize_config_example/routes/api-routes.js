module.exports = (app) => {
  const router = require("express").Router();
  const gigController = require("../controllers/gig.controller");

  // View Routes
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

  // UPDATE method??

  // DELETE method??

  app.use("/", router);
};
