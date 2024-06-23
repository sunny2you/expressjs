//db 정보 저장
module.exports=(function(){
    return{
        //로컬서버. 학습용이니까 이것만 있으면 됨.
        local:{
            host:"localhost",
            port:3306,
            user:'root',
            password:'gocodermysql'
        },
        //실서버.
        real:{
            host:'',
            port:'',
            user:'',
            password:'',
            database:''
        },
        //스테이징 서버
        staging:{
            host:'',
            port:'',
            user:'',
            password:'',
            database:''
        }
        dev:{
            host:'',
            port:'',
            user:'',
            password:'',
            database:''
        }
    }
})();