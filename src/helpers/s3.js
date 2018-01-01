import AWS from 'aws-sdk';
import fs from 'fs';
import moment from 'moment';

require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});


export const upload = (path, _name, type) => new Promise((resolve, reject) => {
  const name = `${moment().format('YYMMDDHHmmss')}__${_name}`;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: name,
    ACL: 'public-read',
    Body: fs.createReadStream(path),
    ContentType: type
  };
  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return reject(err);
    }
    resolve(data);
  });
});
