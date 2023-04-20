const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


/**
 * @typedef Passagem
 * @property {string} nome
 * @property {string} origem - XPTOOOO
 * @property {string} destino - XPTOOOO
 * @property {string} dataViagem - XPTOOOO
 */
const UserSchema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
    origem : {
        type : String,
        required : true
    },
    destino : {
        type : String,
        required : true
    },
    dataViagem : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

UserSchema.plugin(mongoosePaginate)
mongoose.model('Passagem', UserSchema)