module.exports = {
  getAllHouses: async (req, res) => {
    const db = req.app.get("db");
    const houses = await db.get_all_houses();

    res.status(200).send(houses);
  },
  addNewHouse: async (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    const house = await db.add_new_house([name, address, city, state, zip, img, mortgage, rent]);
    res.status(200).send(house);
  },
  deleteHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    const house = await db.delete_house(id);
    res.status(200).send(house);
  }
};
