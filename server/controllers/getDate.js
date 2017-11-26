const getDate = () =>{
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    // console.log(month);
    // month 0 表示1月
    let date = myDate.getDate();
    let hours = myDate.getHours();
    if (hours < 6){
        const newDate = year + '-' + (month+1) + '-' + (date-1);
        return newDate;
    } else {
        const newDate = year + '-' + (month+1) + '-' + (date);
        return newDate
    }
}

module.exports = {
    getDate
}
// 获取日期的方法

// console.log(getDate());