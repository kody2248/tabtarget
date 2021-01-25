var express = require('express');
var router = express.Router();

const ui = require('../models/interface')

/** Pull top X most recently modified Uis */
router.get('/:max', function(req, res, next) {

	//Limit API from pulling the entire database in one request.
	req.params.max = parseInt(req.params.max);
	let max =  req.params.max > 50 ? 50 : req.params.max;

	ui.find(req.query)
		.sort({'date.modified':-1})
		.limit(max)
		.then(documents => {

			res.status(200).json( 
				{
					data: documents
				}
			)

		});

});

/** Insert new interface */
router.post("/", (req, res,next)=>{

  const interface = new ui(
      {
        //id: Number,
        name: req.body.name,
        images: req.body.images,
        slug: req.body.slug,
        url: req.body.url,
        tags: req.body.tags,
        user: {
            name: 'Kody',
            userID: '1234',
            role: 'user'
        },
        date: {
            created: Date.now(),
            modified: Date.now()
        },
        description: req.body.description,
        visibile: {
            private: false, //Only creator
            hidden: false, // Direct link
            restricted: false, //Restricts view to specific users. False by default, list of user IDs if being used
            password: false //Password protected item. False by default, string of hashed password otherwise
        },
        views: 0,
        comments: 0,
        favorites: 0,
        downloads: 0
    
    }
  );

  interface.save();

  res.status(201).json({status:'success'})
  return 201;

});

/**Delete interface by passed ID */
router.delete('/:id', (req,res,next)=>{

  ui.deleteOne({ _id: req.params.id})
    .then(result=>{
      res.status(200).json({status:'success'})
    });

});

/** Pull Uis by supplied filters. Limited to a list of IDs currently */
router.post('/filtered',(req,res,next)=>{

  ui.find({'tags':{"$in":req.body} } )
  .sort({'date.modified':-1})
  .then(documents=>{

      res.status(200).json( 
        {
          status: 'success',
          data: documents
        }
      )

  });

});

module.exports = router;