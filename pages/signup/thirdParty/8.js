import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import FormInput from '@/components/FormInput'
import MerchantNavigator from '@/components/merchant/MerchantNavigator'
import MerchantStepper from '@/components/merchant/MerchantStepper'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'
import countries from '@/constants/countries'

const LogIn = () => {
  const router = useRouter()
  const currentStep = 8
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

  const onSubmit = (data) => {
    localStorage.setItem('data_third_party', JSON.stringify(data))

    const savedData = JSON.parse(localStorage.getItem('data_third_party'))

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

    const adminBirthDate = savedData?.adminBirthDate
    const adminCity = savedData?.adminCity
    const adminCountry = savedData?.adminCountry
    const adminEmail = savedData?.adminEmail
    const adminFirstName = savedData?.adminFirstName
    const adminLastName = savedData?.adminLastName
    const adminLine1 = savedData?.adminLine1
    const adminLine2 = savedData?.adminLine2
    const adminPassword = savedData?.adminPassword
    const adminPhone = savedData?.adminPhone
    const adminPicture = savedData?.adminPicture
    const adminPostalCode = savedData?.adminPostalCode
    const adminTown = savedData?.adminTown
    const adminUsername = savedData?.adminUsername
    const billingCity = savedData?.billingCity
    const billingCountry = savedData?.billingCountry
    const billingLine1 = savedData?.billingLine1
    const billingLine2 = savedData?.billingLine2
    const billingPostalCode = savedData?.billingPostalCode
    const billingTown = savedData?.billingTown
    const cardCVV = savedData?.cardCVV
    const cardExpiry = savedData?.cardExpiry
    const cardName = savedData?.cardName
    const cardNumber = savedData?.cardNumber
    const cardType = savedData?.cardType
    const countryCode = savedData?.countryCode
    const logo = savedData?.logo
    const merchantCity = savedData?.merchantCity
    const merchantCompanyNumber = savedData?.merchantCompanyNumber
    const merchantCountry = savedData?.merchantCountry
    const merchantCountryCode = savedData?.merchantCountryCode
    const merchantEmail = savedData?.merchantEmail
    const merchantLine1 = savedData?.merchantLine1
    const merchantLine2 = savedData?.merchantLine2
    const merchantLogo = savedData?.merchantLogo
    const merchantPhone = savedData?.merchantPhone
    const merchantPostalCode = savedData?.merchantPostalCode
    const merchantRegisteredName = savedData?.merchantRegisteredName
    const merchantTown = savedData?.merchantTown
    const merchantVat = savedData?.merchantVat
    const merchantWebsite = savedData?.merchantWebsite
    const same = savedData?.same
    const tos = savedData?.tos

    const cardExpiryMonth = MONTH[cardExpiry.split('/')[0]]
    const cardExpiryYear = cardExpiry.split('/')[1]

    console.log({
      adminBirthDate,
      adminCity,
      adminCountry,
      adminEmail,
      adminFirstName,
      adminLastName,
      adminLine1,
      adminLine2,
      adminPassword,
      adminPhone,
      adminPicture,
      adminPostalCode,
      adminTown,
      adminUsername,
      billingCity,
      billingCountry,
      billingLine1,
      billingLine2,
      billingPostalCode,
      billingTown,
      cardCVV,
      cardExpiry,
      cardExpiryMonth,
      cardExpiryYear,
      cardName,
      cardNumber,
      cardType,
      countryCode,
      logo,
      merchantCity,
      merchantCompanyNumber,
      merchantCountry,
      merchantCountryCode,
      merchantEmail,
      merchantLine1,
      merchantLine2,
      merchantLogo,
      merchantPhone,
      merchantPostalCode,
      merchantRegisteredName,
      merchantTown,
      merchantVat,
      merchantWebsite,
      same,
      tos,
    })

    toast.promise(
      axios.post('/api/v1/merchants', {
        account: {
          billingInformation: [
            {
              alias: 'Default',
              billingAddress: {
                administrativeAreaId: 'GB-BERKSHIRE',
                countryId: 'GB',
                firstLine: billingLine1,
                secondLine: billingLine2,
                geoLocation: {
                  latitude: {
                    degrees: 51,
                    minutes: 25,
                    seconds: 21.4356,
                    direction: 'N',
                    decimalDegrees: 51.422621,
                  },
                  longitude: {
                    degrees: 0,
                    minutes: 49,
                    seconds: 15.078,
                    direction: 'W',
                    decimalDegrees: -0.820855,
                  },
                },
                postCode: billingPostalCode,
                townId: 'GB-BERKSHIRE-WOKINGHAM',
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
          logo: merchantLogo,
          telephone: {
            countryCode: merchantCountryCode,
            phoneNumber: merchantPhone,
            type: 'MOBILE',
          },
        },
        address: {
          administrativeAreaId: 'GB-BERKSHIRE',
          countryId: 'GB',
          firstLine: merchantLine1,
          secondLine: merchantLine2,
          geoLocation: {
            latitude: {
              degrees: 51,
              minutes: 25,
              seconds: 21.4356,
              direction: 'N',
              decimalDegrees: 51.422621,
            },
            longitude: {
              degrees: 0,
              minutes: 49,
              seconds: 15.078,
              direction: 'W',
              decimalDegrees: -0.820855,
            },
          },
          postCode: merchantPostalCode,
          townId: 'GB-BERKSHIRE-WOKINGHAM',
        },
        administrator: {
          account: {
            email: {
              value: adminEmail,
            },
            password: {
              value: adminPassword,
            },
            picture: adminPicture,
            telephone: {
              countryCode: adminPostalCode,
              phoneNumber: adminPhone,
              type: 'MOBILE',
            },
            username: {
              value: adminUsername,
            },
          },
          address: {
            administrativeAreaId: 'GB-BERKSHIRE',
            countryId: 'GB', // 🔒🔒🔒 IMPORTANT
            firstLine: adminLine1,
            secondLine: adminLine2,
            geoLocation: {
              latitude: {
                degrees: 51,
                minutes: 25,
                seconds: 21.4356,
                direction: 'N',
                decimalDegrees: 51.422621,
              },
              longitude: {
                degrees: 0,
                minutes: 49,
                seconds: 15.078,
                direction: 'W',
                decimalDegrees: -0.820855,
              },
            },
            postCode: adminPostalCode,
            townId: 'GB-BERKSHIRE-WOKINGHAM',
          },
          birthDate: adminBirthDate,
          firstName: adminFirstName,
          gender: 'Male',
          lastName: adminLastName,
          otp: {
            value: '055678',
          },
          termsAgreement: {
            termsId: 'B60013BE-649F-4E97-A4F9-A24DAF6851D8',
          },
          verificationChannelSource: {
            channel: {
              value: 'marvelousprince012233@gmail.com',
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
        vatNumber: merchantVat || '11111111111',
        website: merchantWebsite || 'https://www.google.com',
      }),
      {
        pending: 'Creating your account...',
        success: {
          render({ data: successData }) {
            console.log(successData)
            localStorage.setItem('data_third_party', JSON.stringify(data))
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
                required={true}
                getValues={getValues}
              />
              <FormInput
                type={'number'}
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
              />
              <FormInput
                type={'text'}
                id={'branchCity'}
                label={'City'}
                register={register}
                errors={errors}
                required={true}
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
