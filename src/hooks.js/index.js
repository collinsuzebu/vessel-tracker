import { useQueries } from "react-query";
import { vessels as V } from "../constants";
import { getVesselPositions } from "../api/vessel";

export const useQueryVessels = ({ filters }) => {
  const vesselQueries = useQueries(
    V.map((vessel) => {
      return {
        queryKey: ["vessel", vessel.mmsi],
        queryFn: () => getVesselPositions(vessel.mmsi, filters.days),
      };
    }),
  );

  const isError = vesselQueries.some((query) => query.isError);

  return [isError, vesselQueries];
};
