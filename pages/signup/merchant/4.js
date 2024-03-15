import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 4
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data')),
  })

  const onSubmit = (data) => {
    toast.promise(
      axios.post('/api/v1/registrations/otp', {
        verificationChannelSource: {
          channel: {
            value: getValues().adminEmail,
          },
          type: 'EMAIL',
        },
      }),
      {
        pending: 'Sending OTP...',
        success: {
          render({ data: successData }) {
            console.log(successData)
            localStorage.setItem('data', JSON.stringify(data))
            router.push(`/signup/merchant/${currentStep + 1}`)
            return `Sent!`
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
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="py-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <MerchantStepper activeStep={currentStep} />

          <p className="text-subtitle-2 text-dark">Administrator details</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'text'}
                id={'adminUsername'}
                label={'Username'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'password'}
                id={'adminPassword'}
                label={'Password'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'email'}
                id={'adminEmail'}
                label={'Email'}
                register={register}
                errors={errors}
                required={true}
              />
              <Box sx={{ display: 'flex' }}>
                <FormInput
                  type={'countryCode'}
                  id={'adminCountryCode'}
                  label={'Country Code'}
                  register={register}
                  errors={errors}
                  required={true}
                  getValues={getValues}
                />
                <FormInput
                  type={'tel'}
                  id={'adminPhone'}
                  label={'Phone'}
                  register={register}
                  errors={errors}
                  required={true}
                />
              </Box>
            </Stack>
            <MerchantNavigator current={currentStep} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
