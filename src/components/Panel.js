import React from "react";
import { Box, Select, Flex, HStack, Input } from "@chakra-ui/react";

export default function Panel({ setFilters }) {
  const onChangeFilter = (event) => {
    setFilters((filters) => ({ ...filters, days: event.target.value }));
  };

  return (
    <Box bg="gray.800" color="gray.400" height="229px">
      <Flex justify="center" p={6}>
        <HStack spacing={6}>
          <Select
            variant="outline"
            placeholder="Days"
            onChange={(event) => onChangeFilter(event)}
            disabled={true}
          >
            {[5, 10, 20, 30, 40].map((day) => (
              <option key={day} value={day}>
                {day} days
              </option>
            ))}
          </Select>

          <Input disabled placeholder="Search MMSI" />
        </HStack>
      </Flex>
    </Box>
  );
}
