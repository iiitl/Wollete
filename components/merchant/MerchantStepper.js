import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const MerchantStepper = ({ activeStep }) => {
  const steps = [
    // 'Type',
    // 'Company',
    // 'Address',
    // 'Billing',
    // 'Administrator',
    // 'Administrator',
    // 'Administrator',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
  ]
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep - 1} alternativeLabel>
        {steps.map((label, key) => (
          <Step
            key={key}
            sx={{
              '& .MuiStepIcon-root': {
                color: '#D9D9D9',
              },
              '& .Mui-active': {
                color: '#0E72E8',
              },
              '& .Mui-completed': {
                color: '#0E72E8',
              },
              '& .Mui-completed .MuiStepConnector-line': {
                borderColor: '#0E72E8',
              },
              '& .Mui-active .MuiStepConnector-line': {
                borderColor: '#0E72E8',
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default MerchantStepper
