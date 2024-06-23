//require로 원하는 인스턴스를 받아옴
var express = require('express');

//express 프레임워크의 router을 사용하기 위해 변수 선언
var router=express.Router();

// 라우터는 URI요청에 응답하는 방식
// form uri안에서 루트로 들오올 때에 응답하는 방식.
// res.render는 해당 view파일을 랜더링 할 수 있음.
router.get('/',function(req,res,next){
    res.render('form',{
        name:'Lee Jin Hyun',
        blog:'gocoder.tistory.com',
        homepage:'gocoder.net'});
});

router.post('/',function(req,res,next){
    //json 함수가 자동으로 받아온 폼에 데이터를 json형식으로 변경함
    res.json(req.body);}
    //뭔지 모르겟음..
)

//module.exports는 global 전역으로 해당 라우터를 사용하게 함
module.exports=router;


