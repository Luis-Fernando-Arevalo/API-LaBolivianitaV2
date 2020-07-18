const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'LaBolivianita'
});

mysqlConnection.connect((err)=>{
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('Db esta conectada');
    }
});

module.exports = mysqlConnection;