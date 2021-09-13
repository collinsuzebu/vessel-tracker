import { render } from "@testing-library/react";
import Map from "./Map";

describe("Map", () => {
  const vessels = [
    [
      {
        MMSI: "244870609",
        STATUS: "8",
        SPEED: "33",
        LON: "10.590760",
        LAT: "55.042400",
        COURSE: "64",
        HEADING: "511",
        TIMESTAMP: "2021-08-13T11:42:00",
        SHIP_ID: "4177137",
      },
    ],
    [
      {
        MMSI: "544870609",
        STATUS: "8",
        SPEED: "33",
        LON: "12.590760",
        LAT: "50.042400",
        COURSE: "64",
        HEADING: "511",
        TIMESTAMP: "2021-08-13T11:42:00",
        SHIP_ID: "5177137",
      },
    ],
  ];

  const props = { vessels, antOptions: {}, toggleIcon: false };

  it("renders without crashing", () => {
    render(<Map {...props} />);
  });

  it("renders all vessel ant-paths", () => {
    const map = render(<Map {...props} />);

    const antpaths = map.container.querySelectorAll(".leaflet-ant-path");
    expect(antpaths).toHaveLength(2);
  });

  it("renders vessel markers", () => {
    const map = render(<Map {...props} />);

    const markerpane = map.container.querySelector(".leaflet-marker-pane");

    expect(markerpane).toBeDefined();
    expect(markerpane).toBeInTheDocument();
  });
});
