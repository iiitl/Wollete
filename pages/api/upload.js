import aws from 'aws-sdk'
import multer from 'multer'
const storage = multer.memoryStorage()

const MAX_FILE_SIZE = 5 // MB

const upload = multer({ storage: storage, limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 } })

import nextConnect from 'next-connect'

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `There was an error! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.single('file'))

apiRoute.post(async (req, res) => {
  try {
    const file = req.file
    if (!file) throw new Error('No file provided')

    const { originalname, buffer, mimetype } = file
    if (mimetype.split('/')[0] !== 'image') throw new Error('File is not an image')

    // upload file to digital ocean spaces
    const s3 = new aws.S3({
      accessKeyId: process.env.DIGITAL_OCEAN_SPACES_KEY,
      secretAccessKey: process.env.DIGITAL_OCEAN_SPACES_SECRET,
      endpoint: `https://${process.env.DIGITAL_OCEAN_SPACES_REGION}.digitaloceanspaces.com`,
    })
    const uploadedImage = await s3
      .upload({
        Bucket: process.env.DIGITAL_OCEAN_SPACES_NAME,
        Key: originalname,
        Body: buffer,
        ACL: 'public-read',
      })
      .promise()
    return res.status(200).json({
      error: false,
      message: 'File uploaded successfully',
      data: uploadedImage,
    })
  } catch (err) {
    res.status(500).json({ error: true, message: err.message, data: null })
  }
})

export default apiRoute

export const config = {
  api: {
    bodyParser: false,
  },
}
