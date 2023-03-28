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

  async update(req, res) {
    try {
      const { nameSurname, trademarks } = req.body;

      await Promoter.update(
        { nameSurname, trademarks },
        { where: { id: req.params.id } }
      );

      return res.send(
        `Divulgador atualizado \n Nome: ${nameSurname} \n Selo: ${trademarks}`
      );
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const promoterId = req.params.id;
      await Promoter.destroy({
        where: { id: promoterId },
      });

      return res.send(`Divulgador id: ${promoterId} excluído com sucesso!`);
    } catch (error) {
      console.error(error);
    }
  },
};
