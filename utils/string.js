const COUNTRY = process.env.COUNTRY;

export const capitalize = (x = COUNTRY) =>
  x.replace(/^\w/, c => c.toUpperCase());

export const truncate = x => s =>
  `${s.substring(0, x)}${s.length > x ? "..." : ""}`;
