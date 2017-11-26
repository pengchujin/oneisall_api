const testv = require('../models/oneIndex');
//叫testv只是方便点，87076677
const Date = require('./getDate');
const Axios = require('axios');

const getOneIndexInfo = async(ctx) => {
    const vol = ctx.params.vol;
    console.log('vol...........:' + vol);
    const result = await testv.getOneIndexById(vol);
    ctx.body = result;
    console.log(result.vol)
}
// 通过get请求连接字段id查询，返回object json数据

const getOneByDate = async(ctx) => {
    const date = ctx.params.date;
    console.log('date...........:' + date);
    const result = await testv.getOneByDate(date);
    ctx.body = result;
    console.log('查询的日期为' + result.date)
}
// 通过日期查询one数据,返回json数据

const addOneIndex = async() => {
    ids = [];
    for(let Nb = 0; Nb < 5000; Nb++ ){
        ids.push(Nb);
    }
    for(Nb of ids){
        console.log('..............'+Nb);
    let Rowdata = {};
    await Axios.get('http://v3.wufazhuce.com:8000/api/onelist/' + Nb + '/0')
    .then( function(response){
            Rowdata = response.data         
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata.data == 'object' && Rowdata.data.content_list.length >=1 && Rowdata.data.content_list[0].category == 0){
    let data = {}
    // todo Rowdata信息转换
    data.vol = Rowdata.data.content_list[0].volume
    data.img_url = Rowdata.data.content_list[0].img_url
    data.img_author = Rowdata.data.content_list[0].pic_info
    data.img_kind = Rowdata.data.content_list[0].title
    data.date = Rowdata.data.content_list[0].post_date.slice(0,10)
    data.url = Rowdata.data.content_list[0].share_url
    data.word = Rowdata.data.content_list[0].forward
    data.word_from = Rowdata.data.content_list[0].words_info
    data.id = Rowdata.data.content_list[0].item_id
    if(data.vol.length >= 1 ){
        const result = await testv.addOneIndex(data);
    } else {
        console.log('id: ' + Nb + ' 的文章是空的');
    }
    }
    }
}
// 批量写入one数据

const newOne = async(ctx) => {
    let Rowdata = {};
    let tmpData = {};
    const date = Date.getDate();
    oldResult = await testv.getOneByDate(date);
    if(oldResult && typeof oldResult.dataValues == 'object' && oldResult.dataValues.date.length >= 1) {
         ctx.body = oldResult.dataValues;
    } else {
    await Axios.get('http://v3.wufazhuce.com:8000/api/onelist/idlist')
    .then(function(response){
        tmpData = response.data
    }).catch(function(error) {
        console.log(error);
    });
    let Nb = tmpData.data[0];
    // 获取最新的one id
    await Axios.get('http://v3.wufazhuce.com:8000/api/onelist/' + Nb + '/0')
    .then( function(response){
            Rowdata = response.data       
    })
    .catch(function(error) {
        console.log(error);
    });
    if(typeof Rowdata.data == 'object' && Rowdata.data.content_list.length >=1 && Rowdata.data.content_list[0].category == 0){
    let data = {}
    // todo Rowdata信息转换
    data.vol = Rowdata.data.content_list[0].volume
    data.img_url = Rowdata.data.content_list[0].img_url
    data.img_author = Rowdata.data.content_list[0].pic_info
    data.img_kind = Rowdata.data.content_list[0].title
    data.date = Rowdata.data.content_list[0].post_date.slice(0,10)
    data.url = Rowdata.data.content_list[0].share_url
    data.word = Rowdata.data.content_list[0].forward
    data.word_from = Rowdata.data.content_list[0].words_info
    data.id = Rowdata.data.content_list[0].item_id
    const newResult = await testv.getOneByDate(data.date);
    if(newResult && typeof newResult.dataValues == 'object' && newResult.dataValues.date.length >= 1) {
        ctx.body = newResult.dataValues;
    } else {
    if(data.vol.length >= 1 ){
        const result = await testv.addOneIndex(data);
        ctx.body = result;
    } else {
        console.log('id: ' + Nb + ' 的文章是空的');
    }
    }
}
}
}


module.exports = {
    getOneIndexInfo,
    addOneIndex,
    newOne,
    getOneByDate
}