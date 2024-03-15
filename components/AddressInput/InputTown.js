import { Autocomplete } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import FormInput from '../FormInput'

const InputTown = ({ id, register, errors, administrativeAreaCode, countryCode }) => {
  const [towns, setTowns] = useState([])

  useEffect(() => {
    // get towns from country & administrativeAreaCode
    const fetchTowns = async () => {
      try {
        const towns = await axios.get('/api/v1/towns', {
          params: { countryCode, administrativeAreaCode },
        })
        setTowns(towns.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    if (!administrativeAreaCode) return
    fetchTowns()
  }, [countryCode, administrativeAreaCode])

  return (
    <Autocomplete
      fullWidth
      disableClearable
      autoHighlight
      // allow user to enter custom value
      freeSolo
      id={id}
      getOptionLabel={(option) => option.longName}
      options={towns?.length ? towns : []}
      renderInput={(params) => {
        return (
          <FormInput
            type={'select'}
            id={id}
            label={'Town'}
            register={register}
            errors={errors}
            required={true}
            options={towns?.map((town) => ({ value: town.id, label: town.longName }))}
            defaultValue={''}
            size={'small'}
          />
        )
      }}
    />
  )
}

export default InputTown
