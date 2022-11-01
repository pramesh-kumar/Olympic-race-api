const express = require('express')
const router = new express.Router();

const MensRanking=require('../models/mens')

// Post request 
router.post("/mens", async(req,res)=>{
    try{
        const addingMen = new MensRanking(req.body)
        // console.log(req.body)
        const result = await addingMen.save();
        res.status(201).send(result)

    }catch(e){
        res.status(400).send(e)
    }
})

// Get request 
router.get("/mens", async(req,res)=>{
    try{
        const result = await MensRanking.find().sort({"ranking":1});
        res.status(201).send(result)

    }catch(e){
        res.status(400).send(e)
    }
})

// Get indivisual data
router.get("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await MensRanking.findById(_id);
        res.status(201).send(result)

    }catch(e){
        res.status(400).send(e)
    }
})

// // I want to get indivisual data of player by their country name not by I'd 

// router.get(`/mens/:country`, async(req,res)=>{
//     try{
//         const country = req.params.country;
//         console.log(country)
//         const result = await MensRanking.findById(country);
//         res.status(201).send(result)

//     }catch(e){
//         res.status(400).send(e)
//     }
// })



// Upadte (patch) data
router.patch("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await MensRanking.findByIdAndUpdate(_id,
            req.body,{new:true});
        res.status(201).send(result)

    }catch(e){
        res.status(500).send(e)
    }
})


// delete data
router.delete("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(result)

    }catch(e){
        res.status(500).send(e)
    }
})

module.exports= router