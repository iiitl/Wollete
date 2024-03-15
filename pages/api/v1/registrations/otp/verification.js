import axios from '@/lib/axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(req.body)
      const response = await axios.post('/api/v1/registrations/otp/verification', req.body)
      return res.status(200).json({
        success: true,
        data: response.data,
        error: null,
      })
    } catch (err) {
      return res.status(err.response?.status || 400).json({
        success: false,
        data: null,
        error: err.response?.data || err.message,
      })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
