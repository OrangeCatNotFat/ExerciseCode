var Sequelize = require("sequelize");
// info是数据库名，root是用户名，"123456"是我mysql的密码
const DB = new Sequelize("info", "root", "123456", {
    host: "localhost", // 主机地址
    port: 3306, // 数据库端口号
    dialect: "mysql", // 数据库类型
    pool: { // 数据库连接池
        max: 5, // 最大连接数量
        min: 0, // 最小连接数量
        idle: 10000, // 如果10秒内没有被使用，释放该线程
    }
})

module.exports = DB;
