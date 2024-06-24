//게시판과 관련된 모든 동작은 해당 파일에서 실행됨
//1~4: express와 데이터베이스를 연결하는 부분
var express=require('express');
var router=express.Router();
var mysql_odbc=require('../db/db_conn')();
var conn=mysql_odbc.init();

//uri를 /list/page 형태로 받음. board/list/(페이지숫자)형식으로 게시판 리스트 노출
router.get('/list/:page',function(req,res,next){
    var page=req.params.page;
    var sql="select idx, name, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate,"+
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql,function(err,rows){
        if(err) console.error("err:"+err);
        res.render("list",{title:'게시판 리스트',rows:rows});
    });
});

router.get('/list',function(req,res,next){
    res.redirect('/board/list/1');
})

router.get('/write',function(req,res,next){
    res.render('write',{title:"게시판 글 쓰기"});
});

router.post('/write',function(req,res,next){
    var name=req.body.name;
    var title=req.body.title;
    var content=req.body.content;
    var passwd=req.body.passwd;
    var datas=[name,title,content,passwd];

    var sql="insert into board(name,title,content,regdate, modidate,passwd,hit) values (?,?,?,now(),now(),?,0)";

    // 오류없이 데이터가 입력되면 다시 list 페이지로 이동
    conn.query(sql,datas,function(err,rows){
        if(err) console.error("err: "+err);
        else {
            console.log(rows);
            res.redirect('/board/list');
        }
    });
});

route.get('/read/:idx',function(req,res,next){
    var idx=req.params.idx;
    //db에서 idx 번호에 맞는 데이터 읽어오는 sql
        var sql="select idx,name,title,content,date_format(modidate,%Y-%m-%d %H:%i:%s) modidate,"+
            "date_format(regdate,%Y-%m-%d %H:%i:%s) regdate, hit from board where idx=?";
    conn.query(sql,[idx],function(err,rows){
        if(err) console.error("err: "+err);
        res.render('read',{title:"글 상세",row:row[0]});
    })
});

module.exports=router;