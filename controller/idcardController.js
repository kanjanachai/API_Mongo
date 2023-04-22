const Idcard = require("../models/idcardModel");

////// GET //////
exports.showInfo = async (req, res, next) => {
  const idcard = await Idcard.find();

  const idcardFormat = idcard.map((idcard) => {
    return {
      id: idcard.card_id,
      prefix: idcard.prefix,
      fname: idcard.first_name,
      lname: idcard.last_name,
      birth: idcard.birth_date,
      religion: idcard.religion,
      address: idcard.address,
    };
  });
  res.status(200).json({
    info: idcardFormat,
  });
};

////// POST //////
exports.insertInfo = async (req, res, next) => {
  const {card_id, prefix, first_name, last_name, birth_date, religion, address,} = req.body;

  const idcard = new Idcard({
    card_id: card_id,
    prefix: prefix,
    first_name: first_name,
    last_name: last_name,
    birth_date: birth_date,
    religion: religion,
    address: address,
  });
  await idcard.save();
  res.status(200).json({
    message: "insert data success.",
  });
};

////// PUT //////
exports.updateInfo = async (req, res, next) => {
  const { id } = req.params;
  const {card_id, prefix, first_name, last_name, birth_date, religion, address,} = req.body;
  const idcard = await Idcard.findOne({ card_id: id });

  if (!idcard) {
    res.status(404).json({
      message: "id not found!",
    });
  } else {
    await Idcard.updateOne({
      card_id: card_id,
      prefix: prefix,
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      religion: religion,
      address: address,
    });
    res.status(200).json({
      message: "update data success.",
    });
  }
};

////// DELETE //////
exports.deleteInfo = async (req, res, next) => {
  const { id } = req.params;
  const idcard = await Idcard.deleteOne({ card_id: id });
  if (idcard.deletedCount === 0) {
    res.status(404).json({
      message: "id not found!",
    });
  } else {
    res.status(200).json({
      message: "delete data success.",
    });
  }
};
