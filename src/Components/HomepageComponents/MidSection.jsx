import React from 'react'
import { Box ,Text,Flex} from '@chakra-ui/react'
import Responsive from './ShopByCategorySlider'
const MidSection = () => {
  return (
    <div>
        {/* shop by category */}
        <Box>
            <Text align="left" fontWeight="500">SHOP BY CATEGORY</Text>
            <Responsive/>
        </Box>

    </div>
  )
}

export default MidSection