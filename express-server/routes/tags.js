// Import dependencies
const express = require('express');
const router = express.Router();

const tag = require('../models/tag')

router.get('/', function( req,res,next ){

    tag.find()
        .then(docs=>{
            res.status(200).json(
                {
                    data:docs
                }
            )
        })

});

module.exports = router;