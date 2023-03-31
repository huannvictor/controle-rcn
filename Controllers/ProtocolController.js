const { Op } = require("sequelize");

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
      const schoolsList = await Schools.findAll({
        where: {
          id: {
            [Op.in]: schoolsIds,
          },
        },
      });

      const newProtocol = await Protocol.create({
        rcnId,
        rcnEdition: rcn.edition,
        promoterId,
        promoterName: promoter.nameSurname,
        schoolsList,
      });

      return res.json(newProtocol);
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

  async update(req, res) {
    try {
      const protocolId = req.params.id;
      const { rcnId, promoterId } = req.body;

      const rcn = await Rcn.findOne({ where: { id: rcnId } });
      const promoter = await Promoter.findOne({ where: { id: promoterId } });

      await Protocol.update(
        {
          rcnId,
          rcnEdition: rcn.edition,
          promoterId,
          promoterName: promoter.nameSurname,
        },
        { where: { id: protocolId } }
      );

      return res.send(`Protocolo com ID: ${protocolId} alterado com sucesso!`);
    } catch (error) {
      console.error(error);
      return res.send(error);
    }
  },
};
