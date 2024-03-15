import { Stack } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import InputLine1 from '@/components/AddressInput/InputLine1'
import InputLine2 from '@/components/AddressInput/InputLine2'
import InputPostalCode from '@/components/AddressInput/InputPostalCode'
import InputTown from '@/components/AddressInput/InputTown'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 2

  const [postalCodeValue, setPostalCodeValue] = useState('')
  const [administrativeAreaCode, setAdministrativeAreaCode] = useState('')
  const [administrativeAreaId, setAdministrativeAreaId] = useState('')
  const [geoLocation, setGeoLocation] = useState({})

  const country =
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('data'))?.merchantCountry
  const countryCode = countries.find((c) => c.label === country)?.code

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data')),
  })

  const onSubmit = (data) => {
    localStorage.setItem(
      'data',
      JSON.stringify({
        ...data,
        merchantGeoLocation: geoLocation,
        mrechantAdministrativeAreaId: administrativeAreaId,
      })
    )
    console.log({
      ...data,
      merchantGeoLocation: geoLocation,
      mrechantAdministrativeAreaId: administrativeAreaId,
    })
    router.push(`/signup/merchant/${currentStep + 1}`)
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="py-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <MerchantStepper activeStep={currentStep} />

          <p className="text-subtitle-2 text-dark">Merchant details</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              {/*Postal Code */}
              <InputPostalCode
                id={'merchantPostalCode'}
                register={register}
                errors={errors}
                setPostalCodeValue={setPostalCodeValue}
                postalCodeValue={postalCodeValue}
                setAdministrativeAreaCode={setAdministrativeAreaCode}
                setAdministrativeAreaId={setAdministrativeAreaId}
                countryCode={countryCode}
              />

              {/* line 1 - geoLocation coming from address (line 1)*/}
              <InputLine1
                id={'merchantLine1'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
                setGeoLocation={setGeoLocation}
              />

              {/* Line 2 */}
              <InputLine2
                id={'merchantLine2'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
              />

              {/* Town - administrativeAreaCode set by Postal Code*/}
              <InputTown
                id={'merchantTown'}
                register={register}
                errors={errors}
                administrativeAreaCode={administrativeAreaCode}
                countryCode={countryCode}
              />

              {/* <FormInput
                type={'text'}
                id={'merchantCity'}
                label={'City'}
                register={register}
                errors={errors}
                required={true}
              /> */}
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
