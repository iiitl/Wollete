import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/buttons/Primary'
import Navbar from '@/components/Navbar'

const SignUp = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    router.push(`/signup/${data.userType}/1`)
  }

  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className="pt-12 px-4">
        <div className="max-w-2xl space-y-12 mx-auto">
          <form className="max-w-2xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
              <div>
                <label>
                  <input
                    type="radio"
                    id="userType"
                    name="userType"
                    value={'merchant'}
                    className="scale-[200%] -ml-4"
                    {...register('userType')}
                    required
                  />
                  <span className="text-subtitle-3 ml-10">Merchant</span>
                </label>
                <p className="text-body-regular text-dark-gray ml-9 pt-4">
                  Lorem ipsum dolor sit amet consectetur. Lacinia egestas enim metus adipiscing.
                </p>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    id="userType"
                    name="userType"
                    value={'thirdParty'}
                    className="scale-[200%] -ml-4"
                    {...register('userType')}
                    required
                  />
                  <span className="text-subtitle-3 ml-10">Third Party</span>
                </label>
                <p className="text-body-regular text-dark-gray ml-9 pt-4">
                  Lorem ipsum dolor sit amet consectetur. Lacinia egestas enim metus adipiscing.
                </p>
              </div>
            </div>

            <Button type="submit" className="mt-12">
              Next
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
