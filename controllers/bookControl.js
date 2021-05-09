const { Book } = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      const data = await Book.find({});
      res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  findOne: async ({ params }, res) => {
    try {
      const data = await Book.findById(params.id);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  update: async ({ params, body }, res) => {
    try {
      const data = await Book.findOneAndUpdate({ id: params.id }, body);
      res.status(200).json(`${data} has been updated!`);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  create: async ({ body }, res) => {
    try {
      const data = await Book.create(body);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  remove: async ({ params }, res) => {
    try {
      await Book.findByIdAndRemove({ id: params.id });
      res.status(200).json("Book removed!");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
