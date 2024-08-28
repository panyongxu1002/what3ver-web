export const toStringConvertor = (data: number) => {
  // convert to M/K and round down to 2 decimal points
  if (data >= 1_000_000) return `${Math.floor(data / 10_000) / 100}M`;
  if (data >= 1_000) return `${Math.floor(data / 10) / 100}K`;
  // convert percentage and round to 2 decimal points
  if (data < 1) return `${Math.round(data * 10_000) / 100}%`;
  return data.toString();
};
