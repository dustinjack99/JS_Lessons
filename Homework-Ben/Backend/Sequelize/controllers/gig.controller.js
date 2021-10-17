const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

// POST for gigs
exports.createGig = (req, res) => {
  // Destructure
  //   const { title, technologies, budget, description, contact_email } = req.body;
  //   console.log(title, technologies);

  const gig = req.body;

  Gig.create(gig)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Gig",
      });
    });
};

// READ for gigs
exports.findPublishedGigs = (req, res) => {
  Gig.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving published Gigs",
      });
    });
};

// UPDATE for Gigs
exports.updateGigs = (req, res) => {
  Gig.put()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while attempting to update Gigs",
      });
    });
};
// DELETE for Gigs
exports.deleteGigs = (req, res) => {
  Gig.delete()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while deleting Gigs",
      });
    });
};
