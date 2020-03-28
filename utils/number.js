const DAYS = process.env.DAYS;

export const toNumber = x => (isNaN(Number(x)) ? DAYS : Number(x));
