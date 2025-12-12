const User = require('../models/user.model');

module.exports = {
  async create(data) {
    return await User.create(data);
  },

  async findAll() {
    return await User.findAll();
  },

  async findById(id) {
    return await User.findByPk(id);
  },

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
  },

  async delete(id) {
    const user = await User.findByPk(id);
    if (!user) return false;

    await user.destroy();
    return true;
  }
};