import multer from 'multer';
import { storage } from './../helpers/mycloudinary';

export default class ImageUpload { 
  static upload(req, res, next) {     
    const multerUpload = multer({
      storage,
      limits: { files: 2 }
    }).array('imageUrl');
    multerUpload(req, res, error => {
      if (error instanceof multer.MulterError) {
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Image should not exceed 900kb'
        });
      }
      if (error)
        return res.status(400).json({
          status: '400 Bad Request',
          error: 'Invalid File Format'
        });
      if (req.files) {                   
        req.body.imageUrl = req.files[0].url;        
        req.body.fileUrl = req.files[1].url;        
      }
      return next();
    });
  }
}