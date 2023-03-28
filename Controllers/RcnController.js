const Rcn = require("../models/Rcn");

module.exports = {
  async store(req, res) {
    try {
      const { edition, description } = req.body;
      const rcn = await Rcn.create({ edition, description });

      return res.json(rcn);
    } catch (error) {
      console.error(error);
    }
  },

  async index(req, res) {
    try {
      const rcn = await Rcn.findAll();

      return res.json(rcn);
    } catch (error) {
      console.error(error);
    }
  },

  async update(req, res) {
    try {
      const { edition, description } = req.body;

      await Rcn.update(
        { edition, description },
        { where: { id: req.params.id } }
      );

      return res.send(
        `RCN ATUALIZADA PARA \n ED.: ${edition} \n DESC.: ${description}`
      );
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const rcnId = req.params.id;
      await Rcn.destroy({
        where: { id: rcnId },
      });

      return res.send(`RCN DO ID: ${rcnId} EXCLUÍDA COM SUCESSO.`);
    } catch (error) {
      console.error(error);
    }
  },
};
