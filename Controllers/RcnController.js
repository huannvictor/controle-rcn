const Rcn = require("../models/Rcn");

module.exports = {
  async store(req, res) {
    const { edition, description } = req.body;
    const rcn = await Rcn.create({ edition, description });

    return res.json(rcn);
  },

  async index(req, res) {
    const rcn = await Rcn.findAll();

    return res.json(rcn);
  },

  async update(req, res) {
    const { edition, description } = req.body;

    await Rcn.update(
      { edition, description },
      { where: { id: req.params.id } }
    );

    return res.send(
      `RCN ATUALIZADA PARA \n ED.: ${edition} \n DESC.: ${description}`
    );
  },

  async delete(req, res) {
    const rcnId = req.params.id;
    await Rcn.destroy({
      where: { id: rcnId },
    });

    return res.send(`RCN DO ID: ${rcnId} EXCLUÍDA COM SUCESSO.`);
  },
};
