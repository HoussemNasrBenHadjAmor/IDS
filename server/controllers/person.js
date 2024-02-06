const person = require("./person");

const addPerson = async (req, res) => {
  try {
    const { fullname, email, phone, img } = req.body;

    const data = await person.create({ fullname, email, phone, img });

    res.json({
      data,
      status: 200,
    });
  } catch (error) {
    return error;
  }
};

module.exports = addPerson;
