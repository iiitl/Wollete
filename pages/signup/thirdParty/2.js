import { Stack } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 2

  const {
    register,
    handleSubmit,
    formState: { errors },
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

          <p className="text-subtitle-2 text-dark">Third party details</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'number'}
                id={'thirdPartyPostalCode'}
                label={'Postal code'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'thirdPartyLine1'}
                label={'Address Line 1'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'thirdPartyLine2'}
                label={'Address Line 2'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'text'}
                id={'thirdPartyTown'}
                label={'Town'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'thirdPartyCity'}
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
