const Schools = require("../models/Schools");
const Promoter = require("../models/Promoter");

module.exports = {
  async store(req, res) {
    try {
      const promoterId = req.params.promoterId;
      const { schools } = req.body;

      if (!Array.isArray(schools)) {
        throw new Error("Invalid request body: schools must be an array");
      }

      const promoter = await Promoter.findOne({
        where: { id: promoterId },
      });

      const newSchools = await Schools.bulkCreate(
        schools.map((school) => {
          return {
            code: school.code,
            schoolName: school.schoolName,
            promoterName: promoter.nameSurname,
            promoterId: promoterId,
            region: school.region,
            adopter: school.adopter,
          };
        })
      );

      return res.json(newSchools);
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
      return res.send(error.errors);
    }
  },
};
