const testv = require('../models/question');
//叫testv只是方便点，87076677
const Axios = require('axios');

const getQuestionById = async(ctx) => {
    const id = ctx.params.id;
    console.log('id...........:' + id);
    const result = await testv.getQuestionById(id);
    ctx.body = result;
    console.log('查询id为--------' + result.id)
};
// 通过id查询

const getQuestionByDate = async (ctx) => {
    const date = ctx.params.date;
    console.log('date   :'+date);
    let result = await testv.getQuestionByDate(date);
    ctx.body = result;
    console.log('查询日期为--------' + result.date)
}
//通过date查询essay

const addQuestion = async() =>{
    ids = [];
    for(let Nb = 1; Nb < 2000; Nb++ ){
        ids.push(Nb);
    }
    for(Nb of ids){
        console.log('..............'+Nb);
    let Rowdata = {};
    await Axios.get('http://v3.wufazhuce.com:8000/api/question/detail/' + Nb)
    .then( function(response){
            Rowdata = response.data
           
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata == 'object' && Rowdata.res == 0 && typeof Rowdata.data == 'object'){
    let data = {}
    // todo Rowdata信息转换
    data.id = Rowdata.data.question_id;
    data.title = Rowdata.data.question_title;
    data.q_content = Rowdata.data.question_content;
    data.a_content = Rowdata.data.answer_content;
    data.guide = Rowdata.data.guide_word;
    data.url = Rowdata.data.web_url;
    data.a_author = Rowdata.data.answerer.user_name;
    data.date = Rowdata.data.question_makettime;
    if(data.id >= 1 ){
        const result = await testv.addQuestion(data);
    } else {
        console.log('id: ' + Nb + ' 问题是空的');
    }
    }
    }
}
// 遍历添加question

const newQuestion = async(ctx) =>{
    ids = [];
    ctx.body = '<h1>更新问题成功<h1/>'
    let Rowdata = {};
    await Axios.get('http://v3.wufazhuce.com:8000/api/question/detail/0')
    .then( function(response){
            Rowdata = response.data
           
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata == 'object' && Rowdata.res == 0 && typeof Rowdata.data == 'object'){
    let data = {}
    // todo Rowdata信息转换
    data.id = Rowdata.data.question_id;
    data.title = Rowdata.data.question_title;
    data.q_content = Rowdata.data.question_content;
    data.a_content = Rowdata.data.answer_content;
    data.guide = Rowdata.data.guide_word;
    data.url = Rowdata.data.web_url;
    data.a_author = Rowdata.data.answerer.user_name;
    data.date = Rowdata.data.question_makettime;
    if(data.id >= 1 ){
        const result = await testv.addQuestion(data);
    } else {
        console.log('id: ' + Nb + ' 问题是空的');
    }
    }
}

module.exports= {
    getQuestionById,
    addQuestion,
    getQuestionByDate,
    newQuestion
}