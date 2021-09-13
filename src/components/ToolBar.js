import React from "react";
import PropTypes from "prop-types";
import { StackDivider, VStack, Tooltip, IconButton } from "@chakra-ui/react";
import {
  SunIcon,
  LockIcon,
  SettingsIcon,
  ArrowUpDownIcon,
} from "@chakra-ui/icons";

const ToolBar = ({ setAntOptions, setToggleIcon }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      bgColor="gray.800"
      p={3}
    >
      <Tooltip label="Toggle marker icon" placement="right">
        <IconButton
          colorScheme="blue"
          aria-label="Toggle marker icon"
          icon={<SettingsIcon />}
          onClick={() => setToggleIcon((prevState) => !prevState)}
        />
      </Tooltip>
      <Tooltip label="Reverse matching ants" placement="right">
        <IconButton
          colorScheme="blue"
          aria-label="Reverse matching ants"
          icon={<ArrowUpDownIcon />}
          onClick={() =>
            setAntOptions((prevState) => ({
              ...prevState,
              reverse: !prevState.reverse,
            }))
          }
        />
      </Tooltip>

      <IconButton colorScheme="blue" aria-label="Blinker" icon={<SunIcon />} />
      <Tooltip label="Lock/unlock matching ants" placement="right">
        <IconButton
          colorScheme="blue"
          aria-label="Lock matching ants"
          icon={<LockIcon />}
          onClick={() =>
            setAntOptions((prevState) => ({
              ...prevState,
              paused: !prevState.paused,
            }))
          }
        />
      </Tooltip>
    </VStack>
  );
};

ToolBar.propTypes = {
  setAntOptions: PropTypes.func.isRequired,
  setToggleIcon: PropTypes.func.isRequired,
};

export default React.memo(ToolBar);
