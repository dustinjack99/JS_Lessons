const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

//POST for gigs
exports.createGig = (req, res) => {
  const gig = req.body;

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
// exports.editGig = (req, res) => {
//   Gig.put.then((data) => {});
// };
//DELETE for gigs
// exports.deleteGig = (req, res) => {
// Gig.delete.then((data) => {});
// };
