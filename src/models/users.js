const Pool = require('./../config/db');

const register = (data) => {
  const { id, name, email, phone, password, otp } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id,name,email,phone, password, verif, otp) VALUES('${id}','${name}','${email}','${phone}','${password}',1,'${otp}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const findIdUser = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const verif = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET verif=1 WHERE email='${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const updateProfile = (data) => {
  const { id, name, email, phone, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users 
      SET id='${id}', name='${name}', email='${email}', 
        phone ='${phone}', photo='${photo}' 
      WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  register,
  findEmail,
  findIdUser,
  verif,
  updateProfile,
};
