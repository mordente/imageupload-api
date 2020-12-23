import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    nome:{type: String},
    tamanho: {type: Number},
    chave: {type: String},
    url: {
        type: String,
        default: ""
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});


export default mongoose.model("Post", PostSchema);