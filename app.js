var express = require('express');
var app = express();
const mongoose = require('mongoose');
const attractions = require('./schema/attraction.js');
const resturents = require('./schema/resturent.js');
const accommodation = require('./schema/accommodation.js');
const busservice = require('./schema/busservice.js');
const carrental = require('./schema/carrental.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/asset/'));

const uri = "mongodb+srv://admin:Password@cluster0.v4xnghf.mongodb.net/calipse?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => { 


    app.listen(2000) }).catch((err) => {
         console.log(err) });


app.get('/', (req, res)=>{
    var query = req.query.place;
    console.log(query);
    attractions.find().then((result)=>{

        res.render('./pages/index.ejs',{attractObject:result})

}
         
    ).catch((err) => { res.render('./pages/error.ejs') })
   
});

// app.get('/attraction', (req, res) => {

//     var query  = req.query.place

//     var flag = 0;
//     var i = [];

//     attractions.find().then((result) => {
        
//         result.forEach((e) => {

//             if(typeof query === typeof void(0)) 
//             flag = 0;
//             else if (e.destination.toLowerCase() == query.toLowerCase()){
//                 flag = 1;
            
//             i.push(e)              
//         }
            
//     })
//         if(flag == 1){
//             res.render('./pages/attraction.ejs', { attractObject: i, viewall: 1 })
//         } else if (flag == 0){
//             res.render('./pages/attraction.ejs', { attractObject: result, viewall: 0 });
//         }
//     }

//     ).catch((err) => { 
//         console.log(err)
//         res.render('./pages/error.ejs') })

// });


app.get('/resturents', (req, res) => {
    var query = req.query.place
    var flag = 0;
    var i = [];
    resturents.find().then((result) => {

        result.forEach((e) => {
            if (typeof query === typeof void (0))
                flag = 0;
            else if (e.destination.toLowerCase() == query.toLowerCase()) {
                flag = 1;

                i.push(e)
            }
            
        })
        if (flag == 1) {
            res.render('./pages/resturent.ejs', { restObject: i, viewall: 1 })
        } else if (flag == 0) {
            res.render('./pages/resturent.ejs', { restObject: result, viewall: 0 });
        }
    }

    ).catch((err) => {
        res.render('./pages/error.ejs')
    })

});


app.get('/accommodation', (req, res) => {
    var query = req.query.place
    var flag = 0;
    var i = [];
    accommodation.find().then((result) => {
        result.forEach((e) => {
            if (typeof query === typeof void (0))
                flag = 0;
            else if (e.destination.toLowerCase() == query.toLowerCase()) {
                flag = 1;

                i.push(e)
            }
        
        })
        if (flag == 1) {
            res.render('./pages/accommodation.ejs', { accoObject: i, viewall: 1 })
        } else if (flag == 0) {
            res.render('./pages/accommodation.ejs', { accoObject: result, viewall: 0 });
        }
    }

    ).catch((err) => {
        res.render('./pages/error.ejs')
    })

});






app.get('/busservices', (req, res) => {
    var from= req.query.from
    var to = req.query.to
    var flag = 0;
    var flag2 = 0;
    var i = [];

    if (typeof to === typeof void (0)) {
        to = "";

    }

    if (to == "") {
        flag2 = 0;

    } else {
        flag2 = 1;
    }

    try{

        busservice.find().then((result) => {
            result.forEach((e) => {
                if (typeof from === typeof void (0)) {
                    flag = 0;

                }

                else if (e.place.toLowerCase() == from.toLowerCase()) {

                    flag = 1;

                    i.push(e)
                }
            })

            if (flag == 1 && flag2 == 1) {
                res.render('./pages/busroute.ejs', { busObject: i, viewall: 1, to: to })
            } else if (flag == 1 && flag2 == 0) {

                res.render('./pages/busroute.ejs', { busObject: i, viewall: 1, to: to });
            } else {
                res.render('./pages/busroute.ejs', { busObject: result, viewall: 0, to: to });
            }
        }

        ).catch((err) => {

            res.render('./pages/error.ejs')
        })



    }catch(e){
        res.render('./pages/error.ejs')


    }




});


app.get('/carrental', (req, res) => {
    carrental.find().then((result) => {
        res.render('./pages/carrental.ejs', { carObject: result })
    }

    ).catch((err) => { res.render('./pages/error.ejs') })

});


app.get('*', function (req, res) {
    res.render('./pages/error.ejs');
});



