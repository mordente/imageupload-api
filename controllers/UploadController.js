import Post from '../models/Post.js'

class UploadController {
    async index (req, res) {
        const posts = await Post.find();
        res.json(posts);
    }


    async create (req, res) {
        const files = req.files;

        for(const file of files) {
           const post = await Post.create({
                nome: file.originalname,
                tamanho: file.size,
                chave: file.fieldname,
                url: ""
            })
        }
        res.send("Arquivo salvo com sucesso.")
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            if(!id) {
               return res.status(401).json("ID não enviado.")
            }
    
            const post = await Post.findById(id);
    
            if(!post) {
                return res.status(401).json("Post não encontrado.")
            }
    
            await Post.deleteOne(post);
    
            res.json("Deletado.")
        }
        catch(e) {
            console.log(e);
        }
    }
}


export default new UploadController();