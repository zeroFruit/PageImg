import express from 'express';
import multer from 'multer';
import * as s3 from '../helpers/s3';

const router = express.Router();
const upload = multer();

router.post('/', upload.single('photo'), async (req, res) => {
  const { path, originalname, mimetype } = req.file;
  const data = await s3.upload(path, originalname, mimetype);
  res.json(data);
});

module.exports = router;
