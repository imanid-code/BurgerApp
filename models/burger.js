const orm = require("../config/orm.js");

const burger = {
    selectAll(callback){
        orm.selectAll("burgers", function (result){
            callback(result);
        });
    },

    insertOne(co)

}