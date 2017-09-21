const express = require('express');
const router = express.Router();
const data = require('../data.js');


/*INDEX*/
router.get('/', function(req, res){
    console.log(data);
    res.render('toDonts/index',{
        toDonts: data.seededToDonts
    })
})

/*NEW*/
router.get('/new', (req, res) =>{
    res.render('toDonts/new')
})

/*SHOW DATA*/
router.get('/:id', (req, rex) => {
    const id = parseInt(req.params.id);
    const toDot = data.seededToDonts[id];
    console.log(toDot);
    if(!toDot){
        res.render('/toDonts/show', {
            error: "Not found with this ID"
        })
    } else {
        res.render('toDonts/show', {toDot})
    }
});



/***********************UPDATE DATA *****************/
router.get('/:id/edit', (req, res) => {
    res.render('toDonts/edit', {
        toDot: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    })
})

/***********************UPDATE INFORMATION TO DONOT *****************/
router.put('/:id', function(req, res){
    var toDonotEditData = data.seededToDonts[req.params.id];
    toDonotEditData.description = req.body.description;
    toDonotEditData.urgent = req.body.urgent;
    res.redirect('/toDonts');
});

/***********************DELETE   *****************/
router.delete('/:id', function(req, res){
    data.seededToDonts.splice(req.params.id, 1);
    //removes item from array
    res.redirect('/toDonts');
    //direct back to index 
})


/***********************POST*****************/
router.post('/', (req, res) => {
    console.log(req.body);
    const newToDonts = req.body;
    data.seededToDonts.push(newToDonts);
    res.redirect('/toDonts');
});






module.exports = router;