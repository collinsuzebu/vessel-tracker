export const getVesselPositions = async (mmsi, days = 30) => {
  const response = await fetch(
    `
    https://services.marinetraffic.com/api/exportvesseltrack/cf8f05df0b57bfae43e762cc61fd381239c4c042/v:2/period:daily/days:${days}/mmsi:${mmsi}/protocol:jsono
    `,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
