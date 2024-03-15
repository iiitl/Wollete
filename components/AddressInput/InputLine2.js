import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const InputLine2 = ({ id, postalCodeValue, register, errors }) => {
  return (
    <Autocomplete
      fullWidth
      disableClearable
      autoHighlight
      // allow user to enter custom value
      freeSolo
      id={id}
      getOptionLabel={(option) => (typeof option == 'object' ? option.secondLine || '' : option)}
      options={postalCodeValue?.entries || []}
      renderInput={(params) => (
        <TextField
          {...params}
          label={'Address Line 2'}
          onFocus={(event) => {
            event.target.setAttribute('autocomplete', 'new-password')
          }}
          InputProps={{
            ...params.InputProps,
          }}
          {...register(id)}
          error={!!errors[id]}
          helperText={errors[id] && `${'Address Line 2'} is required`}
        />
      )}
    />
  )
}

export default InputLine2
