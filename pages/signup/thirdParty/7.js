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
  const currentStep = 7
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues:
      typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data_third_party')),
  })

  const [logoUrl, setLogoUrl] = useState(watch('adminPicture'))
  const [loading, setLoading] = useState(false)
  const logoInput = useRef(null)

  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem('data_third_party', JSON.stringify(data))
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
      setValue('adminPicture', url)
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

          <p className="text-subtitle-2 text-dark">Administrator details</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'text'}
                id={'adminFirstName'}
                label={'First name'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'adminLastName'}
                label={'Last name'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'date'}
                id={'adminBirthDate'}
                label={'Birth date'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'file'}
                id={'adminPictureFile'}
                label={'Picture'}
                register={register}
                errors={errors}
                accept={'image/*'}
                onChange={onFileUpload}
              />
              <input
                id={'adminPicture'}
                {...register('adminPicture')}
                type="hidden"
                ref={logoInput}
              />
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

              <FormInput
                type={'checkbox'}
                id={'tos'}
                label={'I have read and agreed to the Terms of Service'}
                register={register}
                defaultChecked={getValues('tos')}
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
