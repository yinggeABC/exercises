/**
 * Created by MWei2 on 1/9/2017.
 */
var WaterLine = require("waterline");
var sailsMemoryAdapter = require("sails-memory")
var waterline = new WaterLine();
var userCollection = WaterLine.Collection.extend({
    identity:"user",
    connection:"default",
    attributes:{
        firstName:'string',
        lastName:'string'
       /* pets:{
            collection:"pet",
            via:"owner"
        }*/
    }
});

var petCollection = WaterLine.Collection.extend({
    identity:"pet",
    connection:"default",
    attributes:{
        breed:"string",
        type:"string",
        name:"string",
        owner:{
            model:"user"
        }
    }
})

waterline.loadCollection(userCollection);
waterline.loadCollection(petCollection);

var config = {
    adapters:{
        "memory":sailsMemoryAdapter
    },
    connections:{
        default:{
            adapter:"memory"
        }
    }
}

waterline.initialize(config, function (err, ontology) {
    if (err) {
        return console.error(err);
    }

    // Tease out fully initialised models.
    var User = ontology.collections.user;
    var Pet = ontology.collections.pet;

    User.create({ // First we create a user.
        firstName: 'Neil',
        lastName: 'Armstrong'
    }).then(function (user) { // Then we create the pet
        return Pet.create({
            breed: 'beagle',
            type: 'dog',
            name: 'Astro',
            owner: user.id
        });

    }).then(function (pet) { // Then we grab all users and their pets
        return User.find();

    }).then(function(users){ // Results of the previous then clause are passed to the next
        console.dir(users);

    }).catch(function(err){ // If any errors occur execution jumps to the catch block.
        console.error(err);
    });
});
