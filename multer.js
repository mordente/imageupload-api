import path from 'path';
import crypto from 'crypto';

import multer from 'multer';
const upload = multer({
    dest: path.resolve('./tmp/uploads'),

    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './tmp/uploads');
        },
        filename: function (req, file, cb) {
                crypto.randomBytes(16, (err, hash) => {
                    if(err) cb(err);

                    const fileName = `${hash.toString("hex")}-${file.originalname}`
                    cb(null, fileName);
                })

        }
    }),

});

export default upload