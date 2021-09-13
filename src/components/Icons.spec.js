import { shipIcon, generatePulsatingMarker } from "./Icons";

describe("Icons", () => {
  describe("shipIcon", () => {
    it("renders without crashing", () => {
      expect(shipIcon).toBeDefined();
    });
  });

  describe("generatePulsatingMarker", () => {
    it("renders without crashing", () => {
      let pulseIcon = generatePulsatingMarker(30, 99);
      expect(pulseIcon).toBeDefined();
    });
  });
});
