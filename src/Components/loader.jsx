import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <div>
        <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    </div>
  )
}

export default Loader