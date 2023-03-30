const Rcn = require("../models/Rcn");
const Promoter = require("../models/Promoter");
const Schools = require("../models/Schools");
const Protocol = require("../models/Protocol");

module.exports = {
  async store(req, res) {
    try {
      const { rcnId, promoterId, schoolsIds } = req.body;

      const rcn = await Rcn.findOne({ where: { id: rcnId } });
      const promoter = await Promoter.findOne({ where: { id: promoterId } });
      // const schoolsList = await Schools.findAll({ where: { id: schoolsIds } });

      const schoolsList = schoolsIds.map(async (schoolId) => {
        const school = await Schools.findAll({ where: { id: schoolId } });
        // return {
        //   code,
        //   schoolName,
        //   region,
        //   adopter,
        // };
        console.log(schoolId);
      });

      // console.log(schoolsList);

      const newProtocol = await Protocol.create({
        rcnId,
        rcnEdition: rcn.edition,
        promoterId,
        promoterName: promoter.nameSurname,
        schoolsList,
      });

      // console.log(newProtocol);
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },

  async index(req, res) {
    try {
      const protocol = await Protocol.findAll();

      return res.json(protocol);
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },

  async delete(req, res) {
    try {
      const protocolId = req.params.id;
      await Protocol.destroy({ where: { id: protocolId } });

      return res.json({
        message: `Protocolo do ID: ${protocolId} deletado com sucesso!`,
      });
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },
};
