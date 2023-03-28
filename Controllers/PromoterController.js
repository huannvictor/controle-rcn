const Promoter = require("../models/Promoter");

module.exports = {
  async store(req, res) {
    try {
      const { nameSurname, trademarks } = req.body;
      const promoter = await Promoter.create({ nameSurname, trademarks });

      return res.json(promoter);
    } catch (error) {
      console.error(error);
    }
  },

  async index(req, res) {
    try {
      const promotersList = await Promoter.findAll();

      return res.json(promotersList);
    } catch (error) {
      console.error(error);
    }
  },
};
