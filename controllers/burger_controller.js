const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();




//Routes 

router.get('/', (req, res) => {
    burger.selectAll((data)) => {
        const hbsObj = {
            burgers: data,
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    }},


router.post("/api/burgers", function (req, res) {
    burger.insertOne(['burger_name', 'devoured'] [req.body.burger_name, req.body.devoured], (result) => {
        //send back id of new burger 
        res.json({ id: result.insertId });
    });

}));

router.put('api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition)

    burger.updateOne({
        devoured: req.body.devoured,
    },
    condition, 
    (result) => {
        if (result.changedRows == 0){
            //if no row were changed , then the iD must not exist
            return res.status(404).end();
        }
        else {
        res.status(200).end();
        }
    }
    );
});

router.delete("/api/burgers/:id", function(req, res){
    burger.delete(req.params.id, function(result){
        if (result.affectedRows === 0){
            return res.status(400).end();
        }
        else{
            res.status(200).end();
        }
    });
});


//export routes for server for use 
modeule.exports = router; 