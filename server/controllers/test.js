const testv = require('../models/test');
const Axios = require('axios');

const getEssayInfo = async (ctx) => {
    const id = ctx.params.id;
    console.log('id   :'+id);
    const result = await testv.getEssayById(id);
    ctx.body = result;
    console.log(result.content)
}
// 从请求连接字段获取id，调用查询

const getEssayByDate = async (ctx) => {
    const date = ctx.params.date;
    console.log('date   :'+date);
    let result = await testv.getEssayByDate(date);
    ctx.body = result;
    console.log(result.content)
}
//通过date查询essay

const addEssayInfo = async (ctx) => {
    ids = [];
    for(let Nb = 1; Nb < 4000; Nb++ ){
        ids.push(Nb);
    }
    for(Nb of ids){
        console.log('..............'+Nb);
    let Rowdata = {};
    await Axios.get('http://v3.wufazhuce.com:8000/api/essay/' + Nb)
    .then( function(response){
            Rowdata = response.data
           
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata == 'object' && Rowdata.res == 0 && typeof Rowdata.data == 'object'){
    let data = {}
    data.title = Rowdata.data.hp_title
    data.id = Rowdata.data.content_id
    data.author = Rowdata.data.hp_author
    data.author_it = Rowdata.data.auth_it
    data.content = Rowdata.data.hp_content
    data.date = (Rowdata.data.last_update_date).slice(0,10)
    data.url = Rowdata.data.web_url
    data.author_img = Rowdata.data.author[0].web_url
    if(data.title.length >= 1 ){
        const result = await testv.addEssay(data);
    } else {
        console.log('id: ' + Nb + ' 的文章是空的');
    }
    }
    }
}
// 遍历查询存储文章

const newEssayInfo = async (ctx) => {
    let Rowdata = {};
    ctx.body = '<h1>刷新文章成功</h1>'
    await Axios.get('http://v3.wufazhuce.com:8000/api/essay/0')
    .then( function(response){
            Rowdata = response.data
           
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata == 'object' && Rowdata.res == 0 && typeof Rowdata.data == 'object'){
    let data = {}
    data.title = Rowdata.data.hp_title
    data.id = Rowdata.data.content_id
    data.author = Rowdata.data.hp_author
    data.author_it = Rowdata.data.auth_it
    data.content = Rowdata.data.hp_content
    data.date = (Rowdata.data.last_update_date).slice(0,10)
    data.url = Rowdata.data.web_url
    data.author_img = Rowdata.data.author[0].web_url
    if(data.title.length >= 1 ){
        const result = await testv.addEssay(data);
    } else {
        console.log('id: ' + Nb + ' 的文章是空的');
    }
    }
}
// 更新当天文章

module.exports = {
    getEssayInfo,
    getEssayByDate,
    newEssayInfo,
    addEssayInfo
}