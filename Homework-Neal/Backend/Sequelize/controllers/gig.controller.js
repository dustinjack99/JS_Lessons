const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

//POST for gigs
exports.createGig = (req, res) => {
  const gig = req.body;
  let errors = [];

  //Validate Fields
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!technologies) {
    errors.push({ text: "Please add some technologies" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }
  Gig.create(gig)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Gig",
      });
    });
};

//READ for gigs - call API point
exports.findPublishedGigs = (req, res) => {
  Gig.findAll()
    .then((gigs) =>
      res.render("gigs", {
        gigs,
      })
    )
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving published gigs",
      });
    });
};

//UPDATE for gigs
exports.editGig = (req, res, next) => {
  Gig.update({ title: "A very crass joke goes here." }, { where: {} })
    .then(console.log(req, "Hello there!"))
    .catch(console.log(next, "GENERAL KENOBI!"));
};
//DELETE for gigs
exports.deleteGig = (req, res) => {
  Gig.destroy({ title: req.title }, { where: req.params.id })
    .then(function (rowsDeleted) {
      res.render(rowsDeleted);
    })
    .catch(next);
};
