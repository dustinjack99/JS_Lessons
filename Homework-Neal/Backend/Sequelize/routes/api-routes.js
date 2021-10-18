module.exports = (app) => {
  const router = require("express").Router();
  const gigController = require("../controllers/gig.controller");
  //View Routes
  router.get("/", (req, res) => {
    res.render("index"); //pointing to handlebars "index" file in "views" folder
  });
  router.get("/gigs", gigController.findPublishedGigs);
  router.get("/gigs/add", (req, res) => {
    res.render("add");
  });

  //Gigs Database Routes
  //CREATE method
  router.post("/gigs/add", gigController.createGig); // pointing to "add.handlebars" in "views" folder - "post" method mentioned in fetch request shows up here

  //READ method
  router.get("/gigs/published", gigController.findPublishedGigs);

  //UPDATE method??
  // router.put("/update", gigController.editGig);

  //DELETE method????
  // router.delete("/delete", gigController.deleteGig);

  app.use("/", router);
};
