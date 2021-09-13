import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";

const Message = ({ message, isError }) => {
  const defaultMessage =
    "...view vessels daily historical position for the last 30 days...";
  return (
    <Box bg="gray.700" mt={-1} p={1} textAlign="center">
      <Text color={isError ? "orange.200" : "gray.50"} fontSize="md">
        {message ? message : defaultMessage}
      </Text>
    </Box>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool,
};

export default React.memo(Message);
