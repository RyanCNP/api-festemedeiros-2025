const UserService = require('../services/user.service');

module.exports = {
  async create(req, res) {
    try {
      const { nome, email } = req.body;

      if (!nome || !email) {
        return res.status(400).json({ message: 'nome e email são obrigatórios' });
      }

      const user = await UserService.create({ nome, email });
      return res.status(201).json(user);

    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({ message: 'email já cadastrado' });
      }
      return res.status(500).json({ message: err.message });
    }
  },

  async findAll(req, res) {
    const users = await UserService.findAll();
    return res.json(users);
  },

  async findById(req, res) {
    const id = Number(req.params.id);
    const user = await UserService.findById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.json(user);
  },

  async update(req, res) {
    const id = Number(req.params.id);
    const user = await UserService.update(id, req.body);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.json(user);
  },

  async delete(req, res) {
    const id = Number(req.params.id);
    const success = await UserService.delete(id);

    if (!success) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(204).send();
  }
};