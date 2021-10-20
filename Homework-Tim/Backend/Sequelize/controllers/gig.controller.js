const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

exports.createGig = (req, res) => {
  console.log(req.body);

  //const {title, technologies, budget, description, contact_email} = req.body;

  //console.log(title, technologies)

  const gig = req.body;

  Gig.create(gig)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the gig",
      });
    });
};

exports.findPublishedGigs = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Gig.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while getting published gigs",
      });
    });
};

exports.findOnePublisedGig = (req, res) => {
  Gig.findOne()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while getting published gigs",
      });
    });
};
//UPDATE for gigs

exports.updateGigs = (req, res) => {
  Gig.put()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while atttempting to update Gigs",
      });
    });
};
//DELETE for gigs
exports.deleteGigs = (req, res) => {
  Gig.delete({
    where: {},
    truncate: false,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while deleting Gigs",
      });
    });
};
