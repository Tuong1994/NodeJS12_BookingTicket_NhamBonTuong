const checkIdExist = (model) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await model.findOne({
      where: {
        id,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(404).send(`Id ${id} không tìm thấy`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkEmailExist = (model) => async (req, res, next) => {
  const { email } = req.body;
  try {
    const detail = await model.findOne({
      where: {
        email,
      },
    });
    if (!detail) {
      next();
    } else {
      res.status(404).send(`Email ${email} đã tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkNameExist = (model) => async (req, res, next) => {
  const { tenPhim } = req.body;
  try {
    const detail = await model.findOne({
      where: {
        tenPhim,
      },
    });
    if (!detail) {
      next();
    } else {
      res.status(404).send(`Phim ${tenPhim} đã tồn tại`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkIdExist,
  checkEmailExist,
  checkNameExist,
};
