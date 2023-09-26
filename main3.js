const express = require('express');
const app = express();
const port = 30001; // 포트 번호
const cors = require('cors');

app.use(cors()); // cors 설정
app.get('/', (req, res) => {
    res.send("메인 페이지");
});

app.get('/:name', (req, res) => {
    const p = req.params; // 파라미터를 가져옴
    // console.log(p.name);
    // const q = req.query; // 쿼리 스트링을 가져옴
    // console.log(q);
    if(p.name==="김동연") {
        res.json({'info':'2-1 담임'});
    }
    else if(p.name==="이영기") {
        res.json({'info':'2-2 담임'});
    }
    else if(p.name==="김주영") {
        res.json({'info':'2-3 담임'});
    }
    else if(p.name==="김민기") {
        res.json({'info':'2-1 부담임'});
    }
    else {
        res.json({'info':'정보 없음'});
    }
});

// app.get('/young', (req, res) => {
//     res.json({"info":"2-2 담임"}); // json 형식으로 전송
// });

// app.get('/joo', (req, res) => {
//     res.json({"info":"2-3 담임"}); // json 형식으로 전송
// });

// app.get('/min', (req, res) => {
//     res.json({"info":"2-1 부담임"}); // json 형식으로 전송
// });

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});