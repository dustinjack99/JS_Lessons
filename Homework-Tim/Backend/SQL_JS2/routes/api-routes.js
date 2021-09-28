module.exports = (app) => {
  const gig = require("../controllers/gig.controller.js");

  var router = require("express").Router();

  router.get("/", (req, res) => res.render("index"));

  // Retrieve all Gigs
  router.get("/gigs", gig.findAll);

  // Gig Form View
  router.get("/gigs/add", (req, res) => res.render("add"));

  // Create a new Gig
  router.post("/gigs/add", gig.create);

  router // Retrieve all published Gigs
    .get("/published", gig.findAllPublished);

  // Retrieve a single Gig with id
  router.get("/:id", gig.findOne);

  // Update a Gig with id
  router.put("/:id", gig.update);

  // Delete a Gig with id
  router.delete("/:id", gig.delete);

  // Delete all Gigs
  router.delete("/", gig.deleteAll);

  app.use("/", router);
};
