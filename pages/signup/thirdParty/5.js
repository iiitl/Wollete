import { Stack } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import OtpInput from 'react-otp-input'
import { toast, ToastContainer } from 'react-toastify'

import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 5
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues:
      typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data_third_party')),
  })

  const [otp, setOtp] = useState('')

  const onSubmit = () => {
    if (otp.length < 6) {
      toast.info('Please enter a valid OTP')
      return
    }
    toast.promise(
      axios.post('/api/v1/registrations/otp/verification', {
        otp: {
          value: otp,
        },
        verificationChannelSource: {
          channel: {
            value: JSON.parse(localStorage.getItem('data_third_party'))?.adminEmail,
          },
          type: 'EMAIL',
        },
      }),
      {
        pending: 'Verifying OTP 🔒',
        success: {
          render({ data: successData }) {
            console.log(successData)
            router.push(`/signup/merchant/${currentStep + 1}`)
            return `OTP Verified!`
          },
        },
        error: {
          render({ data }) {
            console.log(data)
            return `${data.response.data.error || 'Something went wrong!'} ❌`
          },
        },
      }
    )
    setOtp('')
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="py-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <MerchantStepper activeStep={currentStep} />

          <p className="text-subtitle-2 text-dark">Enter the PIN code sent to your email</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="w-6 md:w-12"></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={'otp-input-box'}
              />
            </Stack>
            <MerchantNavigator current={currentStep} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
