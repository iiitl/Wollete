import { Stack, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/buttons/Primary'
import FormInput from '@/components/FormInput'
import Navbar from '@/components/Navbar'

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="pt-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <p className="text-h2 text-dark">Sign in</p>
          <p className="text-lg text-dark-gray">
            New user?{' '}
            <Link href={'/signup'} className="text-main-primary">
              Sign up
            </Link>
          </p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'email'}
                id={'email'}
                label={'Email'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'password'}
                id={'password'}
                label={'Password'}
                register={register}
                errors={errors}
                required={true}
              />
            </Stack>
            <div className="flex mt-4">
              <Link href={'/forgot-password'}>
                <p className="text-lg text-main-primary">Forgot your password?</p>
              </Link>
            </div>
            <Button type="submit" className="mt-12">
              Next
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
