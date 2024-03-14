import { Stack } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

import Button from '@/components/buttons/Primary'

const MerchantNavigator = ({ current, min = 1, max = 8 }) => {
  const router = useRouter()
  return (
    <Stack
      direction={'row'}
      sx={{
        justifyContent: 'space-between',
      }}
    >
      <Button
        type="button"
        className="mt-12"
        disabled={min > current - 1}
        onClick={() => router.push(`/signup/merchant/${current - 1}`)}
      >
        Back
      </Button>
      <Button type="submit" className="mt-12">
        {max == current ? 'Create Account' : 'Next'}
      </Button>
    </Stack>
  )
}

export default MerchantNavigator
