import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { get, useForm } from 'react-hook-form'

import InputLine1 from '@/components/AddressInput/InputLine1'
import InputLine2 from '@/components/AddressInput/InputLine2'
import InputPostalCode from '@/components/AddressInput/InputPostalCode'
import InputTown from '@/components/AddressInput/InputTown'
import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import cardTypes from '@/constants/cardTypes'
import countries from '@/constants/countries'
import formatters from '@/utils/format'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 3

  const [countryCode, setCountryCode] = useState('')
  const [postalCodeValue, setPostalCodeValue] = useState('')
  const [administrativeAreaCode, setAdministrativeAreaCode] = useState('')
  const [administrativeAreaId, setAdministrativeAreaId] = useState('')
  const [geoLocation, setGeoLocation] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
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
        billingGeoLocation: geoLocation,
        billingAdministrativeAreaId: administrativeAreaId,
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

          {/* Card details */}
          <p className="text-subtitle-2 text-dark">Card details</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'text'}
                id={'cardName'}
                label={'Name on Card'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'select'}
                id={'cardType'}
                label={'Card Type'}
                register={register}
                errors={errors}
                required={true}
                // change constats/cardTypes.js to match this
                options={cardTypes}
              />
              <FormInput
                type={'cvv_text'}
                id={'cardNumber'}
                label={'Card Number'}
                placeholder={'XXXX-XXXX-XXXX-XXXX'}
                register={register}
                errors={errors}
                required={true}
                onChange={(e) => {
                  setValue('cardNumber', formatters.cc_format(e.target.value))
                }}
              />
              <FormInput
                type={'cvv_text'}
                id={'cardExpiry'}
                label={'Card Expiry MM/YY'}
                placeholder={'MM/YY'}
                register={register}
                errors={errors}
                required={true}
                onChange={(e) => {
                  setValue('cardExpiry', formatters.expiry_format(e.target.value))
                }}
              />
              <FormInput
                type={'cvv_text'}
                id={'cardCVV'}
                label={'CVV'}
                placeholder={'000'}
                register={register}
                errors={errors}
                required={true}
                onChange={(e) => {
                  setValue('cardCVV', formatters.cvv_format(e.target.value))
                }}
                maxLength={3}
                pattern="[0-9][0-9][0-9]"
              />
            </Stack>
          </form>

          {/* Billing address */}
          <p className="text-subtitle-2 text-dark">Billing Address</p>
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'checkbox'}
                id={'same'}
                label={'Same as merchant address?'}
                register={register}
                defaultChecked={getValues('same')}
                onClick={(e) => {
                  if (e.target.checked) {
                    setValue(
                      'billingCountry',
                      JSON.parse(localStorage.getItem('data')).merchantCountry
                    )
                    setValue(
                      'billingPostalCode',
                      JSON.parse(localStorage.getItem('data')).merchantPostalCode
                    )
                    setValue('billingLine1', JSON.parse(localStorage.getItem('data')).merchantLine1)
                    setValue('billingLine2', JSON.parse(localStorage.getItem('data')).merchantLine2)
                    setValue('billingTown', JSON.parse(localStorage.getItem('data')).merchantTown)
                    setValue('billingCity', JSON.parse(localStorage.getItem('data')).merchantCity)
                    setValue(
                      'billingAdministrativeAreaId',
                      JSON.parse(localStorage.getItem('data')).merchantAdministrativeAreaId
                    )
                    setValue(
                      'billingGeoLocation',
                      JSON.parse(localStorage.getItem('data')).merchantGeoLocation
                    )
                  } else {
                    setValue('billingPostalCode', '')
                    setValue('billingLine1', '')
                    setValue('billingLine2', '')
                    setValue('billingTown', '')
                    setValue('billingCity', '')
                    setValue('billingAdministrativeAreaId', '')
                    setValue('billingGeoLocation', '')
                  }
                }}
              />

              <Stack spacing={2}>
                <FormInput
                  type={'country'}
                  id={'billingCountry'}
                  label={'Country'}
                  register={register}
                  errors={errors}
                  getValues={getValues}
                  onChange={(event, value) => {
                    setCountryCode(value.code)
                  }}
                />

                <InputPostalCode
                  id={'billingPostalCode'}
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
                  id={'billingLine1'}
                  postalCodeValue={postalCodeValue}
                  register={register}
                  errors={errors}
                  setGeoLocation={setGeoLocation}
                />

                {/* Line 2 */}
                <InputLine2
                  id={'billingLine2'}
                  postalCodeValue={postalCodeValue}
                  register={register}
                  errors={errors}
                />

                {/* Town - administrativeAreaCode set by Postal Code*/}
                <InputTown
                  id={'billingTown'}
                  register={register}
                  errors={errors}
                  administrativeAreaCode={administrativeAreaCode}
                  countryCode={countryCode}
                />

                {/* <FormInput
                    type={'text'}
                    id={'billingPostalCode'}
                    label={'Postal code'}
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={watch('same')}
                    value={
                      watch('same')
                        ? JSON.parse(localStorage.getItem('data')).merchantPostalCode
                        : ''
                    }
                  />
                  <FormInput
                    type={'text'}
                    id={'billingLine1'}
                    label={'Address Line 1'}
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={watch('same')}
                    value={
                      watch('same') ? JSON.parse(localStorage.getItem('data')).merchantLine1 : ''
                    }
                  />
                  <FormInput
                    type={'text'}
                    id={'billingLine2'}
                    label={'Address Line 2'}
                    register={register}
                    errors={errors}
                    disabled={watch('same')}
                    value={
                      watch('same') ? JSON.parse(localStorage.getItem('data')).merchantLine2 : ''
                    }
                  />
                  <FormInput
                    type={'text'}
                    id={'billingTown'}
                    label={'Town'}
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={watch('same')}
                    value={
                      watch('same') ? JSON.parse(localStorage.getItem('data')).merchantTown : ''
                    }
                  /> */}
                {/* <FormInput
                    type={'text'}
                    id={'billingCity'}
                    label={'City'}
                    register={register}
                    errors={errors}
                    required={true}
                    disabled={watch('same')}
                    value={
                      watch('same') ? JSON.parse(localStorage.getItem('data')).merchantCity : ''
                    }
                  /> */}
              </Stack>
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
