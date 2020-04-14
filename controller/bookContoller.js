const db = require("../db/models");

module.exports = {
    findAll : function(req,res){
        db.Books.find(req.query).then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res){
        db.Books.create(req.body).then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Books.findById(req.params.id).then(dbBook => dbBook.remove())
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    }
};