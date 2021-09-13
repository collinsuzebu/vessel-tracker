import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";

const TooltipContainer = ({ marker }) => {
  return (
    <Box>
      <Text>
        ShipID: <b>{marker.SHIP_ID}</b>
      </Text>
      <Text>
        Speed: <b>{marker.SPEED}</b>
      </Text>
      <Text>
        Status: <b>{marker.STATUS}</b>
      </Text>
      <Text>
        Time: <b>{marker.TIMESTAMP}</b>
      </Text>
    </Box>
  );
};

TooltipContainer.propTypes = {
  marker: PropTypes.shape({
    SHIP_ID: PropTypes.string.isRequired,
    SPEED: PropTypes.string.isRequired,
    STATUS: PropTypes.string.isRequired,
    TIMESTAMP: PropTypes.string.isRequired,
  }),
};

export default TooltipContainer;
