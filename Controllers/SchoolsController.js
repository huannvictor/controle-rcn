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
      return res.send(error);
    }
  },

  async index(req, res) {
    try {
      const schoolsList = await Schools.findAll();

      return res.json(schoolsList);
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },

  async indexByPromoter(req, res) {
    try {
      const promoterId = req.params.promoterId;
      const schoolsList = await Schools.findAll({
        where: { promoterId: promoterId },
      });

      return res.json(schoolsList);
    } catch (error) {
      console.error(error);
      return res.send(error.errors);
    }
  },

  async update(req, res) {
    try {
      const schoolId = req.params.id;
      const { code, schoolName, promoterId, region, adopter } = req.body;

      const promoter = await Promoter.findOne({
        where: { id: promoterId },
      });

      await Schools.update(
        {
          code,
          schoolName,
          promoterName: promoter.nameSurname,
          promoterId,
          region,
          adopter,
        },
        { where: { id: schoolId } }
      );

      return res.send(`Escola ${schoolName} atualizada!`);
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },

  async delete(req, res) {
    try {
      const schoolId = req.params.id;

      await Schools.destroy({
        where: { id: schoolId },
      });

      const deletedSchool = await Schools.findOne({
        where: { id: schoolId },
      });

      if (deletedSchool !== 0) {
        return res.status(404).json({
          error: `Escola com ID ${schoolId} não encontrada!`,
        });
      }

      return res.json({
        message: `Escola com ID ${schoolId} deletada com sucesso!`,
      });
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },
};
