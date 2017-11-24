const db = require('../config/db');
questionModel = '../schema/question.js';

const OneDb = db.One;
// 初始化连接数据库
const question = OneDb.import(questionModel);
// 用sequelize的import方法引入表结构

const getQuestionById = async(id) => {
    const result = await question.findOne({
        where: {
            id: id
        }
    })
    return result;
};
// 通过id

const getQuestionByDate = async(date) => {
    const result = await question.findOne({
        where: {
            date: date
        }
    })
    return result;
};
// 通过date查询

const addQuestion = async(data) => {
    const result = await question.create({
        id: data.id,
        title: data.title,
        q_content: data.q_content,
        a_content: data.a_content,
        guide: data.guide,
        url: data.url,
        a_author: data.a_author,
        date: data.date
    })
    return result;
}
// 写入Question对象

module.exports = {
    getQuestionById,
    addQuestion,
    getQuestionByDate
}