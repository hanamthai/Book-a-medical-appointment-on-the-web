import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    //Sử dụng hàm có sẵn (Promise) của js để sử lý bất đồng bộ.
    try {
      let hashPasswordUserFromBcrypt = await hashPasswordUser(data.password);
      await db.User.create({
        // == INSERT INTO USER
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        email: data.email,
        password: hashPasswordUserFromBcrypt,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phonenumber: data.phonenumber,
      });
      resolve("Success!!!");
    } catch (e) {
      reject(e);
    }
  });
};

let displayUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({ raw: true }); // fileAll là hàm có sẵn của sequelize (https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let getUserInfoById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUserData = async (data) => {
  return new Promise( async (resolve, reject) => {
    try{
      let user = await db.User.findOne({
        where: {id: data.id}
      })
      if(user){
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;

        await user.save();
        let allUsers = await db.User.findAll();
        resolve(allUsers);
      }
      else{
        resolve();
      }
    } catch(e){
      reject(e);
    }
  })
}

let hashPasswordUser = async (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  displayUser: displayUser,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData
};
