const axios = require("axios");

module.exports = {
  findAll: async ({ query }, res) => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const resdata = result.data.items;
    resdata.filter(({ volumeInfo }) => res.json(volumeInfo));
  },
};
