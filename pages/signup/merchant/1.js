import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { set, useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 1
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues: typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data')),
  })
  const [logoUrl, setLogoUrl] = useState(watch('merchantLogo'))
  const [loading, setLoading] = useState(false)
  const logoInput = useRef(null)

  const onSubmit = (data) => {
    localStorage.setItem('data', JSON.stringify(data))
    router.push(`/signup/merchant/${currentStep + 1}`)
  }

  const onFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      setLoading(true)
      const uploadFileRes = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const url = uploadFileRes.data.data.Location
      setLogoUrl(url)
      setValue('merchantLogo', url)
      logoInput.current.value = url
    } catch (e) {
      console.log(e)
      alert(e.response?.data.message || e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="py-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <MerchantStepper activeStep={currentStep} />

          <p className="text-subtitle-2 text-dark">Merchant details</p>
          <p className="text-lg text-dark-gray">
            Have an account?{' '}
            <Link href={'/login'} className="text-main-primary">
              Sign in
            </Link>
          </p>

          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'country'}
                id={'merchantCountry'}
                label={'Country'}
                register={register}
                errors={errors}
                required={true}
                getValues={getValues}
              />
              <FormInput
                type={'text'}
                id={'merchantRegisteredName'}
                label={'Registered company name'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'email'}
                id={'merchantEmail'}
                label={'Email'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'url'}
                id={'merchantWebsite'}
                label={'Website (optional)'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'text'}
                id={'merchantVat'}
                label={'VAT (optional)'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'number'}
                id={'merchantCompanyNumber'}
                label={'Company Number'}
                register={register}
                errors={errors}
                required={true}
              />

              <Box sx={{ display: 'flex' }}>
                <FormInput
                  type={'countryCode'}
                  id={'merchantCountryCode'}
                  label={'Country Code'}
                  register={register}
                  errors={errors}
                  required={true}
                  getValues={getValues}
                />
                <FormInput
                  type={'tel'}
                  id={'merchantPhone'}
                  label={'Phone'}
                  register={register}
                  errors={errors}
                  required={true}
                />
              </Box>

              <FormInput
                type={'file'}
                id={'merchantLogoFile'}
                label={'Logo'}
                register={register}
                errors={errors}
                accept={'image/*'}
                onChange={onFileUpload}
              />

              <input {...register('merchantLogo')} type="hidden" ref={logoInput} />
              {loading ? (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              ) : (
                <img
                  src={logoUrl}
                  className="rounded-full w-24 h-24 bg-slate-100 object-cover"
                ></img>
              )}
            </Stack>
            <MerchantNavigator current={currentStep} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
