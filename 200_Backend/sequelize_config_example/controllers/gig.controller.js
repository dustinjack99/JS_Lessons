const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

// POST for gigs
exports.createGig = (req, res) => {
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
        message:
          err.message || "Some error occurred while retreiving published gigs",
      });
    });
};

// UPDATE for Gigs

// DELETE for Gigs
