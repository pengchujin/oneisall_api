const db = require('../config/db');
oneIndexModel = '../schema/one_index.js';

const OneDb = db.One;
// 初始化连接数据库
const oneIndex = OneDb.import(oneIndexModel);
// 用sequelize的import方法引入表结构

const getOneIndexById = async (vol) => {
    const oneIndexInfo = await oneIndex.findOne({
        where: {
            vol: 'VOL.'+vol
        }
    });
    return oneIndexInfo;
}
// 通过vol查询oneIndex内容返回object

const getOneByDate = async (date) => {
    const oneIndexInfo = await oneIndex.findOne({
        where: {
            date: date
        }
    });
    return oneIndexInfo;
}
// 通过查询日期返回one object内容

const addOneIndex = async (data) => {
    const result = await oneIndex.create({
        vol: data.vol,
        img_url: data.img_url,
        img_author: data.img_author,
        img_kind: data.img_kind,
        date: data.date,
        url: data.url,
        word: data.word,
        word_from: data.word_from,
        id: data.id
    })
    return result;
}
// controller传入的对象 写入数据库

module.exports = {
    getOneIndexById,
    addOneIndex,
    getOneByDate
}

