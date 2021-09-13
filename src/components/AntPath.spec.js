import { render } from "@testing-library/react";
import { MapContainer, TileLayer } from "react-leaflet";

import AntPath from "./AntPath";

describe("AntPath", () => {
  const props = { markers: [[]], options: {} };

  it("renders without crashing", () => {
    render(
      <MapContainer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <AntPath {...props} />
      </MapContainer>,
    );
  });
});
