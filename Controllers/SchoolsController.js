const Schools = require("../models/Schools");
const Promoter = require("../models/Promoter");

module.exports = {
  async store(req, res) {
    try {
      const { code, schoolName, promoterId } = req.body;

      const promoter = await Promoter.findOne({ where: { id: promoterId } });

      const newSchool = await Schools.create({
        code,
        schoolName,
        promoterName: promoter.nameSurname,
        promoterId,
      });

      return res.json(newSchool);
    } catch (error) {
      console.error(error);
      res.send(error.errors);
    }
  },

  async index(req, res) {
    try {
      const schoolsList = await Schools.findAll();

      return res.json(schoolsList);
    } catch (error) {
      console.error(error);
    }
  },
};
