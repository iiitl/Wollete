import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import Button from '@/components/buttons/Primary'
import FormInput from '@/components/FormInput'
import Navbar from '@/components/Navbar'

const LogIn = () => {
  const [showOTPField, setShowOTPField] = useState(false)
  const [showPasswordField, setShowPasswordField] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Console Logging everything as implemented in login page :)
    if (showPasswordField) {
      console.log('New Password:', data.newPassword)
      console.log('Confirm Password:', data.confirmPassword)
      console.log('Password changed successfully')
    } else if (showOTPField) {
      console.log('OTP submitted:', data.otp)
      setShowOTPField(false)
      setShowPasswordField(true)
    } else {
      console.log('Email submitted:', data.email)
      setShowOTPField(true)
    }
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="pt-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <p className="text-h2 text-dark">Forgot Password</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'email'}
                id={'email'}
                label={'Email'}
                register={register}
                errors={errors}
                required={true}
                disabled={showPasswordField} 
              />
              {showOTPField && !showPasswordField && (
                <FormInput
                  type={'text'}
                  id={'otp'}
                  label={'OTP'}
                  register={register}
                  errors={errors}
                  required={true}
                />
              )}
              {showPasswordField && (
                <>
                  <FormInput
                    type={'password'}
                    id={'newPassword'}
                    label={'New Password'}
                    register={register}
                    errors={errors}
                    required={true}
                  />
                  <FormInput
                    type={'password'}
                    id={'confirmPassword'}
                    label={'Confirm New Password'}
                    register={register}
                    errors={errors}
                    required={true}
                  />
                </>
              )}
            </Stack>
            <div className="flex mt-4">
            </div>
            <Button type="submit" className="mt-12">
              {showPasswordField ? 'Submit' : (showOTPField ? 'Verify OTP' : 'Send OTP')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
