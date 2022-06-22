
let getHomePage = (req,res) => {
    return res.render("homepage.ejs")    //Tại sao không chỉ rõ đường dẫn (views/homepage.ejs) là bởi vì trong viewEngine ta đã khai báo đường dẫn.
}

let getEmployeePage = (req,res) => {
    return res.render("employeepage/info.ejs")
}

// sau này sẽ còn nhiều func nên ta export theo dạng object
// object: {
//     key:" ",
//     value: ""
// }

module.exports = {
    getHomePage: getHomePage,
    getEmployeePage: getEmployeePage
}