import db from '../models/index';

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

// sau này sẽ còn nhiều func nên ta export theo dạng object
// object: {
//     key:" ",
//     value: ""
// }

module.exports = {
  getHomePage: getHomePage,
  getEmployeePage: getEmployeePage,
};
