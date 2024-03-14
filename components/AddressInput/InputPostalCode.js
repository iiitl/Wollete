import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InputPostalCode = ({
  id,
  register,
  errors,
  postalCodeValue,
  setPostalCodeValue,
  setAdministrativeAreaId,
  setAdministrativeAreaCode,
  countryCode,
}) => {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [postalCodes, setPostalCodes] = useState([])

  // value is shared b/w InputPostalCode, InputLine1 & InputLine2
  // hence defined in parent and passed as a prop instead

  useEffect(() => {
    // get postCodes & administrativeAreas from country
    const fetchData = async () => {
      try {
        setLoading(true)
        const res1 = await axios.get('/api/v1/post-codes', {
          params: { countryCode },
        })
        setPostalCodes(res1.data.data)
        setLoading(false)

        const res2 = await axios.get('/api/v1/administrative-areas', {
          params: { countryCode },
        })
        setAdministrativeAreaId(res2.data.data[0]?.id) // is actually set in payload
        setAdministrativeAreaCode(res2.data.data[0]?.code) // is needed for fetching towns
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [countryCode])
  return (
    <Autocomplete
      fullWidth
      disableClearable
      autoHighlight
      // allow user to enter custom value
      freeSolo
      id={id}
      // option.postCode || "option" for freeSolo
      getOptionLabel={(option) => (typeof option == 'object' ? option.postCode || '' : option)}
      options={postalCodes}
      loading={loading}
      // value, onChange, inputValue, onInputChange
      // ccutom useStates required
      // coz react-hook-forms is not updating states properly
      value={postalCodeValue}
      onChange={(event, newValue) => {
        setPostalCodeValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={'Postal Code'}
          autoComplete="new-password"
          // autoComplete="new-password" somehow get's changed to "off" on focus
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'new-password')
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <div>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </div>
            ),
          }}
          {...register(id, { required: true })}
          error={!!errors[id]}
          helperText={errors[id] && `${'Postal Code'} is required`}
        />
      )}
    />
  )
}

export default InputPostalCode
