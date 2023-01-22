import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const AdProducts_Loading = () => {
  const LoadingElement = new Array(10).fill(0);
  return (
    <Box>
      {LoadingElement.map((ele) => {
        return (
          <Stack height="50px" width="100%" borderRadius="10px" margin="10px 0px" bg="#0e101a">
            <Skeleton height="30px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        );
      })}
    </Box>
  );
};

export default AdProducts_Loading;
