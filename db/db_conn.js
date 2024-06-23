//db연결 관리를 할 소스를 담은 파일
//db접속 정보를 이용해 호출 시에 데이터베이스에 접속할 수 있도록 개발하는 소스

var mysql=require('mysql');
var config=require('./db_info').local;

module.exports=function(){
    return{
        init:function(){
            return mysql.createConnection({
                host:config.host,
                port:config.port,
                user:config.user,
                password:config.password,
                database:config.database
            })
        }
    }
};