import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import AntPath from "./AntPath";
import TooltipContainer from "./TooltipContainer";
import { shipIcon, generatePulsatingMarker } from "./Icons";
import { vessels as V } from "../constants";

const Map = ({ vessels, antOptions, toggleIcon }) => {
  const antPath = useMemo(() => {
    return vessels.map((vessel, idx) => {
      if (vessel) {
        return (
          <AntPath
            key={idx}
            markers={vessel.map((marker) => [marker.LAT, marker.LON])}
            options={antOptions}
          />
        );
      }
    });
  }, [vessels]);

  const markerGroup = useMemo(() => {
    return vessels.map((vessel, idx) => {
      return (
        <MarkerClusterGroup
          showCoverageOnHover={false}
          key={idx}
          onMouseOver={(evt) =>
            evt.propagatedFrom
              .bindTooltip(`Vessel (${V[idx].name})`)
              .openTooltip()
          }
          onMouseOut={(evt) => evt.propagatedFrom.unbindTooltip()}
        >
          {vessel &&
            vessel.map((marker, idx) => {
              const markerIcon =
                idx === vessel.length - 1
                  ? generatePulsatingMarker(35, marker.MMSI % 10)
                  : generatePulsatingMarker(20, marker.MMSI % 10);
              return (
                <Marker
                  key={idx}
                  position={[marker.LAT, marker.LON]}
                  icon={toggleIcon ? shipIcon : markerIcon}
                >
                  <Tooltip>
                    <TooltipContainer marker={marker} />
                  </Tooltip>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      );
    });
  }, [vessels, toggleIcon]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[51.0, 19.0]}
        zoom={2}
        maxZoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerGroup}
        {antPath}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  vessels: PropTypes.arrayOf(PropTypes.array).isRequired,
  antOptions: PropTypes.object.isRequired,
  toggleIcon: PropTypes.bool,
};

export default React.memo(Map);
