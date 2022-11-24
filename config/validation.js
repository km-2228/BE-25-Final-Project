const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
const pesanLesValidation = (data) => {
  const schema = Joi.object({
    teacherId: Joi.string().required(),
    userId: Joi.string().required(),
    biaya: Joi.string().required(),
    jenjangMateri: Joi.string().required(),
    topikMateri: Joi.string(),
    detilTopik: Joi.string(),
    tanggal: Joi.string().required(),
    jamMulai: Joi.string().required(),
    durasi: Joi.string().required(),
    modeBelajar: Joi.string().required(),
    alamat: Joi.string(),
    maps: Joi.string(),
    tambahan: Joi.string(),
    
  });
  return schema.validate(data);
};
const pengajarValidation = (data) => {
  const schema = Joi.object({
    nama: Joi.string().required(),
    pendidikan: Joi.string().required(),
    deskripsi: Joi.string().required(),
    edukasi: Joi.string().required(),
    bidangAjar: Joi.string().required(),
  });
};

module.exports.pesanLesValidation = pesanLesValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.pengajarValidation = pengajarValidation;
