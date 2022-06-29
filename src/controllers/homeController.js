import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = (req, res) => {
  return res.render("homepage.ejs"); //Tại sao không chỉ rõ đường dẫn (views/homepage.ejs) là bởi vì trong viewEngine ta đã khai báo đường dẫn.
};

let getEmployeePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render('employee/info.ejs',{
      data: JSON.stringify(data)});
  } catch (e) {
    console.log(e);
  }
};

let getFormSignIn = (req, res) => {
  return res.render("form-sign-in.ejs"); //Tại sao không chỉ rõ đường dẫn (views/homepage.ejs) là bởi vì trong viewEngine ta đã khai báo đường dẫn.
};

let postSignIn = async (req, res) => {
  let mess = await CRUDService.createNewUser(req.body);
  console.log(mess);
  return res.send('Thank you for filling out our form !!!');
}

// sau này sẽ còn nhiều func nên ta export theo dạng object
// object: {
//     key:" ",
//     value: ""
// }

module.exports = {
  getHomePage: getHomePage,
  getEmployeePage: getEmployeePage,
  getFormSignIn: getFormSignIn,
  postSignIn: postSignIn
};
