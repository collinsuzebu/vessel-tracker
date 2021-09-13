import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";

import Panel from "./Panel";
import NavBar from "./NavBar";
import Message from "./Message";
import ToolBar from "./ToolBar";
import { useQueryVessels } from "../hooks.js";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Main() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [filters, setFilters] = useState({ days: 30, mmsi: "" });
  const [antOptions, setAntOptions] = useState({
    weight: 3,
    delay: 752,
    paused: false,
    reverse: false,
    color: "#a7a7af",
    pulseColor: "#433232",
  });

  const [isError, vesselQueries] = useQueryVessels({ filters });

  const vessels = vesselQueries.map((q) => q.data);

  const messageProps = {
    message: isError ? "Network Error - Failed to fetch." : "",
    isError: isError,
  };

  return (
    <>
      <NavBar />
      <Message {...messageProps} />
      <Flex>
        <ToolBar setAntOptions={setAntOptions} setToggleIcon={setToggleIcon} />
        <Map
          vessels={vessels}
          antOptions={antOptions}
          toggleIcon={toggleIcon}
        />
      </Flex>

      <Panel setFilters={setFilters} />
    </>
  );
}
