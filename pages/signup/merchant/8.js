import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import InputLine1 from '@/components/AddressInput/InputLine1'
import InputLine2 from '@/components/AddressInput/InputLine2'
import InputPostalCode from '@/components/AddressInput/InputPostalCode'
import InputTown from '@/components/AddressInput/InputTown'
import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 8

  const [countryCode, setCountryCode] = useState('')
  const [postalCodeValue, setPostalCodeValue] = useState('')
  const [administrativeAreaCode, setAdministrativeAreaCode] = useState('')
  const [administrativeAreaId, setAdministrativeAreaId] = useState('')
  const [geoLocation, setGeoLocation] = useState({})

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

  const onSubmit = (data) => {
    localStorage.setItem('data', JSON.stringify(data))

    const savedData = JSON.parse(localStorage.getItem('data'))

    const MONTH = {
      '01': 'JANUARY',
      '02': 'FEBRUARY',
      '03': 'MARCH',
      '04': 'APRIL',
      '05': 'MAY',
      '06': 'JUNE',
      '07': 'JULY',
      '08': 'AUGUST',
      '09': 'SEPTEMBER',
      10: 'OCTOBER',
      11: 'NOVEMBER',
      12: 'DECEMBER',
    }

    const merchantLogo = savedData?.merchantLogo
    let merchantCountry = savedData?.merchantCountry
    const merchantRegisteredName = savedData?.merchantRegisteredName
    const merchantEmail = savedData?.merchantEmail
    const merchantWebsite = savedData?.merchantWebsite
    const merchantVat = savedData?.merchantVat
    const merchantCompanyNumber = savedData?.merchantCompanyNumber
    const merchantCountryCode = savedData?.merchantCountryCode
    const merchantPhone = savedData?.merchantPhone
    const merchantPostalCode = savedData?.merchantPostalCode
    const merchantLine1 = savedData?.merchantLine1
    const merchantLine2 = savedData?.merchantLine2
    const merchantTown = savedData?.merchantTown
    const merchantGeoLocation = savedData?.merchantGeoLocation
    const mrechantAdministrativeAreaId = savedData?.mrechantAdministrativeAreaId
    const cardName = savedData?.cardName
    const cardType = savedData?.cardType
    const cardNumber = savedData?.cardNumber
    const cardExpiry = savedData?.cardExpiry
    const cardCVV = savedData?.cardCVV
    const same = savedData?.same
    let billingCountry = savedData?.billingCountry
    const billingPostalCode = savedData?.billingPostalCode
    const billingLine1 = savedData?.billingLine1
    const billingLine2 = savedData?.billingLine2
    const billingTown = savedData?.billingTown
    const billingGeoLocation = savedData?.billingGeoLocation
    const billingAdministrativeAreaId = savedData?.billingAdministrativeAreaId
    const adminUsername = savedData?.adminUsername
    const adminPassword = savedData?.adminPassword
    const adminEmail = savedData?.adminEmail
    const adminCountryCode = savedData?.adminCountryCode
    const adminPhone = savedData?.adminPhone
    let adminCountry = savedData?.adminCountry
    const adminPostalCode = savedData?.adminPostalCode
    const adminLine1 = savedData?.adminLine1
    const adminLine2 = savedData?.adminLine2
    const adminTown = savedData?.adminTown
    const adminGeoLocation = savedData?.adminGeoLocation
    const adminAdministrativeAreaId = savedData?.adminAdministrativeAreaId
    const adminPicture = savedData?.adminPicture
    const adminFirstName = savedData?.adminFirstName
    const adminLastName = savedData?.adminLastName
    const adminBirthDate = savedData?.adminBirthDate
    const tos = savedData?.tos
    const branchName = savedData?.branchName
    const branchEmail = savedData?.branchEmail
    const branchNumber = savedData?.branchNumber
    const branchCountryCode = savedData?.branchCountryCode
    const branchTelephone = savedData?.branchTelephone
    const branchCountry = savedData?.branchCountry
    const branchPostalCode = savedData?.branchPostalCode
    const branchLine1 = savedData?.branchLine1
    const branchLine2 = savedData?.branchLine2
    const branchTown = savedData?.branchTown
    const otp = savedData?.otp

    const cardExpiryMonth = MONTH[cardExpiry.split('/')[0]]
    const cardExpiryYear = cardExpiry.split('/')[1]

    adminCountry = countries.find((country) => country.label === adminCountry)?.code
    billingCountry = countries.find((country) => country.label === billingCountry)?.code
    merchantCountry = countries.find((country) => country.label === merchantCountry)?.code

    toast.promise(
      axios.post('/api/v1/merchants', {
        account: {
          billingInformation: [
            {
              alias: 'Default',
              billingAddress: {
                administrativeAreaId: billingAdministrativeAreaId,
                countryId: billingCountry,
                firstLine: billingLine1,
                secondLine: billingLine2,
                geoLocation: billingGeoLocation,
                postCode: billingPostalCode,
                townId: billingTown,
              },
              billingDayOfMonth: 1,
              card: {
                expiryMonth: cardExpiryMonth,
                expiryYear: cardExpiryYear,
                name: cardName,
                pan: cardNumber, // ⚠️ pan === cardNumber ??
                type: cardType,
              },
              primary: true,
            },
          ],
          email: {
            value: merchantEmail,
          },
          logo: null, // ❌ No DigitalOcean Spaces required :(
          telephone: {
            countryCode: merchantCountryCode,
            phoneNumber: merchantPhone,
            type: 'MOBILE',
          },
        },
        address: {
          administrativeAreaId: mrechantAdministrativeAreaId,
          countryId: adminCountry,
          firstLine: merchantLine1,
          secondLine: merchantLine2,
          geoLocation: merchantGeoLocation,
          postCode: merchantPostalCode,
          townId: merchantTown,
        },
        administrator: {
          account: {
            email: {
              value: adminEmail,
            },
            password: {
              value: adminPassword,
            },
            picture: null, // ❌ No DigitalOcean Spaces required :(
            telephone: {
              countryCode: adminCountryCode,
              phoneNumber: adminPhone,
              type: 'MOBILE',
            },
            username: {
              value: adminUsername,
            },
          },
          address: {
            administrativeAreaId: adminAdministrativeAreaId,
            countryId: adminCountry,
            firstLine: adminLine1,
            secondLine: adminLine2,
            geoLocation: adminGeoLocation,
            postCode: adminPostalCode,
            townId: adminTown,
          },
          birthDate: adminBirthDate,
          firstName: adminFirstName,
          gender: 'Male', // ⚠️ No such field in the form
          lastName: adminLastName,
          otp: {
            value: otp,
          },
          termsAgreement: {
            termsId: 'B60013BE-649F-4E97-A4F9-A24DAF6851D8',
          },
          verificationChannelSource: {
            channel: {
              value: adminEmail,
            },
            type: 'EMAIL',
          },
        },
        classifications: [
          {
            value: 'Manufactuting',
          },
          {
            value: 'Packaging',
          },
        ],
        companyNumber: merchantCompanyNumber,
        registeredName: merchantRegisteredName,
        vatNumber: merchantVat,
        website: merchantWebsite,
      }),
      {
        pending: 'Creating your account...',
        success: {
          render({ data: successData }) {
            console.log(successData)
            localStorage.setItem(
              'data',
              JSON.stringify({
                ...data,
                branchGeoLocation: geoLocation,
                branchAdministrativeAreaId: administrativeAreaId,
              })
            )
            router.push(`/`)
            return `Welcome aboard!`
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

          <p className="text-subtitle-2 text-dark">Merchant branch</p>

          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <FormInput
                type={'text'}
                id={'branchName'}
                label={'Branch name'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'email'}
                id={'branchEmail'}
                label={'Branch Email'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'number'}
                id={'branchNumber'}
                label={'Branch Number'}
                register={register}
                errors={errors}
                required={true}
              />
              <Box sx={{ display: 'flex' }}>
                <FormInput
                  type={'countryCode'}
                  id={'branchCountryCode'}
                  label={'Country Code'}
                  register={register}
                  errors={errors}
                  required={true}
                  getValues={getValues}
                />
                <FormInput
                  type={'tel'}
                  id={'branchTelephone'}
                  label={'Branch telephone'}
                  register={register}
                  errors={errors}
                  required={true}
                />
              </Box>

              <FormInput
                type={'country'}
                id={'branchCountry'}
                label={'Country'}
                register={register}
                errors={errors}
                getValues={getValues}
                onChange={(event, value) => {
                  setCountryCode(value.code)
                }}
              />

              <InputPostalCode
                id={'branchPostalCode'}
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
                id={'branchLine1'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
                setGeoLocation={setGeoLocation}
              />

              {/* Line 2 */}
              <InputLine2
                id={'branchLine2'}
                postalCodeValue={postalCodeValue}
                register={register}
                errors={errors}
              />

              {/* Town - administrativeAreaCode set by Postal Code*/}
              <InputTown
                id={'branchTown'}
                register={register}
                errors={errors}
                administrativeAreaCode={administrativeAreaCode}
                countryCode={countryCode}
              />

              {/* <FormInput
                type={'country'}
                id={'branchCountry'}
                label={'Country'}
                register={register}
                errors={errors}
                required={true}
                getValues={getValues}
              />
              <FormInput
                type={'text'}
                id={'branchPostalCode'}
                label={'Postal code'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'branchLine1'}
                label={'Address Line 1'}
                register={register}
                errors={errors}
                required={true}
              />
              <FormInput
                type={'text'}
                id={'branchLine2'}
                label={'Address Line 2'}
                register={register}
                errors={errors}
              />
              <FormInput
                type={'text'}
                id={'branchTown'}
                label={'Town'}
                register={register}
                errors={errors}
                required={true}
              /> */}
              {/* <FormInput
                type={'text'}
                id={'branchCity'}
                label={'City'}
                register={register}
                errors={errors}
                required={true}
              /> */}
            </Stack>
            <MerchantNavigator current={currentStep} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
