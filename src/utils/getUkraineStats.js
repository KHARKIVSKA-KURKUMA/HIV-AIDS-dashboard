const EXPECTED_REGIONS = 25;

export function getUkraineStats(monthData) {
  if (!monthData) return null;

  if (monthData["Україна"]) {
    return monthData["Україна"];
  }

  const regions = Object.entries(monthData)
    .filter(([name]) => name !== "Україна")
    .map(([, values]) => values);

  if (regions.length !== EXPECTED_REGIONS) {
    return null;
  }

  const fields = [
    ["HIV", "cases"],
    ["AIDS", "cases"],
    ["AIDS", "mortality"],
  ];

  const valid = regions.every((region) =>
    fields.every(([group, field]) => {
      const value = region?.[group]?.[field];

      return (
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value)) &&
        Number(value) >= 0
      );
    }),
  );

  if (!valid) return null;

  const sum = (group, field) =>
    regions.reduce((total, region) => total + Number(region[group][field]), 0);

  return {
    HIV: {
      cases: sum("HIV", "cases"),
      rate: null,
    },
    AIDS: {
      cases: sum("AIDS", "cases"),
      mortality: sum("AIDS", "mortality"),
      rate: null,
      mortality_rate: null,
    },
    derivedFromRegions: true,
  };
}
