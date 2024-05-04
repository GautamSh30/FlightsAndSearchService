const { City } = require("../models/index");

class CityRepository {
  // constructor() {}

  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   rthe below approach works but not return updated object
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
