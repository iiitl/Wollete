import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useState } from 'react'

import countries from '@/constants/countries'

const FormInput = ({
  // common props
  id,
  label,
  placeholder,
  type,
  register,
  errors,
  required,
  disabled,
  // select
  value,
  options,
  defaultValue,
  size,
  // checkbox
  defaultChecked,
  // country
  getValues,
  onChange,
  // postalCode
  stateOptions,
  // inputProps (eg: 'accept' for file)
  ...props
}) => {
  const rules = {}
  if (required) rules.required = `${label} is required`

  // password
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  {
    /* 
      button
      checkbox
      color
      date
      datetime-local
      email
      file
      hidden
      image
      month
      number
      password
      radio
      range
      reset
      search
      submit
      tel
      text
      time
      url
      week
    */
  }

  switch (type) {
    case 'password':
      return (
        <FormControl variant="outlined" disabled={disabled}>
          <InputLabel htmlFor={id} error={!!errors?.[id]}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={id}
            label={label}
            {...register(id, rules)}
            error={!!errors?.[id]}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id={id} error={!!errors?.[id]}>
            {errors?.[id]?.message}
          </FormHelperText>
        </FormControl>
      )

    case 'file':
      return (
        <FormControl variant="outlined" fullWidth disabled={disabled}>
          {/* shrink label so it doesn't collides with 'Chose File' button */}
          <InputLabel htmlFor={id} error={!!errors?.[id]} shrink={true}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={id}
            label={label}
            {...register(id, rules)}
            error={!!errors?.[id]}
            type={type}
            onChange={onChange}
            // other props are passed as inputProps, for eg accept='image/*'
            inputProps={props}
          />
          <FormHelperText id={id} error={!!errors?.[id]}>
            {errors?.[id]?.message}
          </FormHelperText>
          {/* extra helper text for max size */}
          <FormHelperText id={id}>max size 5 MB</FormHelperText>
        </FormControl>
      )

    case 'select':
      return (
        <FormControl fullWidth disabled={disabled}>
          <InputLabel htmlFor={id} error={!!errors?.[id]}>
            {label}
          </InputLabel>
          <Select
            id={id}
            label={label}
            size={size}
            {...register(id, rules)}
            error={!!errors?.[id]}
            defaultValue={defaultValue}
          >
            {/* map options with value & label to MenuItem */}
            {options?.map((option, key) => (
              <MenuItem key={key} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText id={id} error={!!errors?.[id]}>
            {errors?.[id]?.message}
          </FormHelperText>
        </FormControl>
      )

    case 'month':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            // defaultValue={dayjs('2022-04-17')}
            views={['month', 'year']}
            openTo="month"
          />
        </LocalizationProvider>
      )

    case 'checkbox':
      return (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...register(id, rules)}
                id={id}
                inputProps={props}
                defaultChecked={defaultChecked}
              />
            }
            label={label}
          />
        </FormGroup>
      )

    case 'country':
      return (
        <Autocomplete
          options={countries}
          disableClearable
          autoHighlight
          defaultValue={countries.find((country) => country.label === getValues(id))}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label}
              {/* {option.code}  */}
              {/* {option.phone} */}
            </Box>
          )}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              {...register(id, { required: true })}
              error={!!errors[id]}
              helperText={errors[id] && 'Country is required'}
            />
          )}
        />
      )

    case 'countryCode':
      return (
        <Autocomplete
          options={countries}
          disableClearable
          autoHighlight
          defaultValue={countries.find((country) => '+' + country.phone === getValues(id))}
          getOptionLabel={(option) => '+' + option.phone}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {/* {option.label} */}
              {/* {option.code} */} +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                width: '160px',
                borderRadius: '0px',
              }}
              label={label}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              {...register(id, { required: true })}
              error={!!errors[id]}
              helperText={errors[id] && 'Country Code is required'}
            />
          )}
        />
      )

    case 'cvv_text':
      return (
        <FormControl variant="outlined" fullWidth disabled={disabled}>
          <InputLabel htmlFor={id} error={!!errors?.[id]}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={id}
            label={label}
            placeholder={placeholder}
            {...register(id, rules)}
            error={!!errors?.[id]}
            type={type}
            inputProps={props}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
          />
          <FormHelperText id={id} error={!!errors?.[id]}>
            {errors?.[id]?.message}
          </FormHelperText>
        </FormControl>
      )

    default:
      return (
        <FormControl variant="outlined" fullWidth disabled={disabled}>
          <InputLabel htmlFor={id} error={!!errors?.[id]}>
            {label}
          </InputLabel>
          <OutlinedInput
            id={id}
            label={label}
            placeholder={placeholder}
            {...register(id, rules)}
            error={!!errors?.[id]}
            type={type}
            inputProps={props}
            value={value}
            defaultValue={defaultValue}
            // onChange={onChange}
          />
          <FormHelperText id={id} error={!!errors?.[id]}>
            {errors?.[id]?.message}
          </FormHelperText>
        </FormControl>
      )
  }
}

export default FormInput
