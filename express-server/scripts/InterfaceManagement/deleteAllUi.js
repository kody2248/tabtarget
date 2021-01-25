const mongoose = require('mongoose');
const Interfaces = require('../models/interface');

function deleteAllUi() {

    //Loop through first level and save class info
    const query = Interfaces.deleteMany()
    query.then((doc)=>{                                                                         

        console.log('all deleted');

    });

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
mongoose.connect('mongodb+srv://swgoS7TbXZiFWgch:swgoS7TbXZiFWgch@cluster0.a9aqa.mongodb.net/<dbname>?retryWrites=true&w=majority')
  .then(()=>{
    console.log('connected to mongo')
    deleteAllUi();
  })
  .catch(()=>{
    console.log('mongo connection failed')
  })