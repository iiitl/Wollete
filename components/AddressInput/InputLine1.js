import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const InputLine1 = ({ id, postalCodeValue, register, errors, setGeoLocation, disabled, value }) => {
  return (
    <Autocomplete
      fullWidth
      disableClearable
      autoHighlight
      // allow user to enter custom value
      freeSolo
      id={id}
      getOptionLabel={(option) => (typeof option == 'object' ? option.firstLine || '' : option)}
      options={postalCodeValue?.entries || []}
      // geoLocation is derived from merchant address (line 1)
      onChange={(event, newValue) => {
        setGeoLocation(newValue?.geoLocation)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={'Address Line 1'}
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'new-password')
          }}
          InputProps={{
            ...params.InputProps,
          }}
          {...register(id, { required: true })}
          error={!!errors[id]}
          helperText={errors[id] && `${'Address Line 1'} is required`}
        />
      )}
    />
  )
}

export default InputLine1
