import db from "../models/index";
import bcrypt from "bcryptjs";

let handelUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      let isExist = await checkEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ['email','roleId','password'],
          where: { email: email },
          raw: true
        });
        if (user) {
          //check thêm 1 lần phòng trường hợp có ng khác đồng thời xóa user vừa xác nhận tồn tại.
          //compare password
          let check = await bcrypt.compareSync(password, user.password); // check input password and hash password.
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Success login!!!";
            
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password!";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `Your's email not found!!!`;
        }
        resolve(userData);
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exist in my system. Please try other email.`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handelUserLogin: handelUserLogin,
};
