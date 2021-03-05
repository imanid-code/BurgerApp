const orm = require("../config/orm.js");

const burger = {
    selectAll(callback){
        orm.selectAll("burgers", function (result){
            callback(result);
        });
    },

    insertOne(cols, vals, callback){
        orm.insertOne("burgers", cols, vals, function(result){
            callback(result);
        });
    },


        updateOne(objColVals, condition, callback){
            orm.updateOne("burgers" , objColVals, condition, function(result){
                callback(result);
            });
        },
        //?
        delete(id, callback){
            orm.delete("burgers", id, function(result){
                callback(result)
            })
        }
}



//export the db function for controller (burgercontroller.js)
module.exports = burger;