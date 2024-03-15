import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 6

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues:
      typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data_third_party')),
  })

  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem('data_third_party', JSON.stringify(data))
    router.push(`/signup/merchant/${currentStep + 1}`)
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
                type={'country'}
                id={'adminCountry'}
                label={'Country'}
                register={register}
                errors={errors}
                required={true}
                getValues={getValues}
              />
              <FormInput
                type={'number'}
                id={'adminPostalCode'}
                label={'Postal code'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'adminLine1'}
                label={'Address Line 1'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'adminLine2'}
                label={'Address Line 2'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'text'}
                id={'adminTown'}
                label={'Town'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'adminCity'}
                label={'City'}
                register={register}
                errors={errors}
                required={true}
              />
            </Stack>

            {/* Back & Next */}
            <MerchantNavigator current={currentStep} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
