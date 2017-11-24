const db = require('../config/db');
essayModel = '../schema/essay.js';
// 引入essay表结构
const OneDb = db.One;
const Essay = OneDb.import(essayModel);
// 用sequelize的import方法引入表结构

const getEssayById = async (id) => {
    const essayInfo = await Essay.findOne({
        where: {
            id: id
        }
    });
    return essayInfo;
}
// 通过id查询Essay信息，返回json

const getEssayByDate = async (date) => {
    const essayInfo = await Essay.findOne({
        where: {
            date: date
        }
    });
    return essayInfo;
}
// 通过date查询essay

const addEssay = async (data) =>{
  const result =   await Essay.create({
        id : data.id,
        title: data.title,
        author : data.author,
        author_it : data.author_it,
        content : data.content,
        date : data.date,
        url : data.url,
        author_img : data.author_img
    })
    return result;
}
// 数据库写入Essay信息

module.exports = {
    getEssayById,
    getEssayByDate,
    addEssay
}
// 暴露方法