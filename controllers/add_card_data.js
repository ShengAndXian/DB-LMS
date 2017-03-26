var add_card_data = async (ctx , next) => {
    var connection = require('./login.js')();
    var cno = ctx.request.body.cno || "";
    var name = ctx.request.body.name || "";
    var department = ctx.request.body.department || "";
    var telephone = ctx.request.body.telephone || "";

    var sql = 'insert into card value(? , ? , ? , ?)';
    var map = new Map();
    try{
        await connection.query(sql , [cno , name , department , telephone]);
        map["return"] = "添加借书证成功！";
    }
    catch(err){
        console.log(err);
        map["return"] = "添加借书证失败，请检查各项格式";
    }
    ctx.response.status = 200;
    ctx.response.type = 'application/json';
    ctx.response.body = JSON.stringify(map);
    await next();
}

var delete_card_data = async (ctx , next) => {
    var connection = require('./login.js')();
    var cno = ctx.request.body.cno || "";

    var sql = 'delete from card where cno = ?';
    var map = new Map();
    try{
        await connection.query(sql , [cno]);
        map["return"] = '删除借书证成功！';
    }
    catch(err){
        console.log(err);
        map["return"] = "借书证不存在！";
    }
    ctx.response.status = 200;
    ctx.response.type = 'application/json';
    ctx.response.body = JSON.stringify(map);
    await next();
}

module.exports = {
    "POST /add_card/add" : add_card_data,
    "POST /add_card/delete" : delete_card_data
};