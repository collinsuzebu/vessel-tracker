import L from "leaflet";
import { colors } from "../constants";

import shipIconSVG from "../icons/ship.svg";

const shipIcon = new L.Icon({
  iconUrl: shipIconSVG.src,
  iconRetinaUrl: shipIconSVG.src,
  iconSize: new L.Point(35, 35),
  shadowSize: [50, 64],
  shadowAnchor: [4, 62],
  className: "",
});

const generatePulsatingMarker = function (radius, color) {
  const cssStyle = `
    width: ${radius}px;
    height: ${radius}px;
    background: ${colors[color]};
    color: ${color};
    box-shadow: 0 0 0 ${colors[color]};
    border: 3px solid #999;
  `;
  return L.divIcon({
    className: "",
    html: `<div style="${cssStyle}" class="icon-pulse"></div>`,
  });
};

export { shipIcon, generatePulsatingMarker };
