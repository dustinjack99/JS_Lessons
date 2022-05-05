const db = require("../models");
const Gig = db.Gig;
const Op = db.Sequelize.Op;

// Create and Save a new Gig
exports.create = (req, res) => {
  console.log(req.body, "body");
  const { title, technologies, budget, description, contact_email } = req.body;
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Gig
  const gig = {
    title,
    technologies,
    budget,
    description,
    contact_email,
  };

  // Save Gig in the database
  Gig.create(gig)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Gig.",
      });
    });
};

// Retrieve all Gig from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Gig.findAll({ where: condition })
    .then((data) => {
      res.render("gigs", { data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Gig with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Gig.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Gig with id=" + id,
      });
    });
};

// Update a Gig by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Gig.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Gig was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Gig with id=${id}. Maybe Gig was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Gig with id=" + id,
      });
    });
};

// Delete a Gig with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Gig.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Gig was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Gig with id=${id}. Maybe Gig was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Gig with id=" + id,
      });
    });
};

// Delete all Gig from the database.
exports.deleteAll = (req, res) => {
  Gig.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};

// Find all published Gig
exports.findAllPublished = (req, res) => {
  Gig.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
