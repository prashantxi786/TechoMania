import "../../../style/Ad_Products_Card.css";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import React from "react";

const AdProducts_Card = ({ id, title, price, imageSrc, category }) => {
  return (
    <Box className="Ad_Products_Card_Container">
      <Box>
        <Image src={imageSrc} alt={id} />
      </Box>
      <Box>
        <Tooltip hasArrow label={title} bg="gray.300" color="black">
          <Text isTruncated>{title}</Text>
        </Tooltip>
      </Box>
      <Box>
        <Button>View</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Box>
    </Box>
  );
};

export default AdProducts_Card;
