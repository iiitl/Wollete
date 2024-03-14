import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import InputLine1 from '@/components/AddressInput/InputLine1'
import InputLine2 from '@/components/AddressInput/InputLine2'
import InputPostalCode from '@/components/AddressInput/InputPostalCode'
import InputTown from '@/components/AddressInput/InputTown'
import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 6

  const [countryCode, setCountryCode] = useState('')
  const [postalCodeValue, setPostalCodeValue] = useState('')
  const [administrativeAreaCode, setAdministrativeAreaCode] = useState('')
  const [administrativeAreaId, setAdministrativeAreaId] = useState('')
  const [geoLocation, setGeoLocation] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('data')),
  })

  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem(
      'data',
      JSON.stringify({
        ...data,
        adminGeoLocation: geoLocation,
        adminAdministrativeAreaId: administrativeAreaId,
      })
    )
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
                getValues={getValues}
                onChange={(event, value) => {
                  setCountryCode(value.code)
                }}
              />

              <InputPostalCode
                id={'adminPostalCode'}
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
                id={'adminLine1'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
                setGeoLocation={setGeoLocation}
              />

              {/* Line 2 */}
              <InputLine2
                id={'adminLine2'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
              />

              {/* Town - administrativeAreaCode set by Postal Code*/}
              <InputTown
                id={'adminTown'}
                register={register}
                errors={errors}
                administrativeAreaCode={administrativeAreaCode}
                countryCode={countryCode}
              />

              {/* <FormInput
                type={'text'}
                id={'adminCity'}
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
