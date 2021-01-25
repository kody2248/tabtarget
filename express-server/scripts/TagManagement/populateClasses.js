const mongoose = require('mongoose');
const classes = require('./masterClassList');

const Tag = mongoose.Schema({
    //id: Number,
    name: String,
    icon: String,
    tagColor: String,
    parentTag: String

});

const tagModel = mongoose.model('Tag', Tag);

function addClasses() {

    var classInsert;
    var classSpecs;
    
    for (const item of classes) {
        
        classSpecs = [];
    
        console.log('run find');

        //Loop through first level and save class info
        const query = tagModel.find({name:item.name})
        query.then((doc)=>{                                                                         

            console.log(doc);

            if( doc.length == 0 ) {

                classInsert = new tagModel({
                    name: item.name,
                    icon: item.image,
                    tagColor: item.classColor,
                    parentTag: null
                });

                console.log(classInsert);
                classInsert.save();
                console.log('saved');

            
        
                //Once save completes move on to specs and insert each individually
                for (const spec of item.specs) {
                
                    specInsert = new tagModel({
                        name: spec.name,
                        icon: spec.image,
                        tagColor: item.classColor,
                        parentTag: classInsert._id
                    });

                    console.log(specInsert);
                    specInsert.save();
                }

            } else {
                console.log('reject')
            }

        });

    }

};

// {
//     "deathKnight": {
//       "name":"Death Knight",
//       "image":"../../../assets/icons/class/classicon_deathknight.jpg",
//       "classColor":"#d43d57",
//       "specs":{
//         "blood":{
//           "image":this.imageBaseUrl+"spell_deathknight_bloodpresence.jpg",
//           "name":"Blood"
//         },
//         "frost":{
//           "image":this.imageBaseUrl+"spell_deathknight_frostpresence.jpg",
//           "name":"Frost"
//         },
//         "unholy":{
//           "image":this.imageBaseUrl+"spell_deathknight_unholypresence",
//           "name":"Unholy"
//         }
//       }
//     }
//   }

// Connect and execute
mongoose.connect('mongodb://localhost:27017/tabtarget')
  .then(()=>{
    console.log('connected to mongo')
    addClasses();
  })
  .catch(()=>{
    console.log('mongo connection failed')
  })

  console.log('--------------------------------')
  console.log('Populate Classes Ran')