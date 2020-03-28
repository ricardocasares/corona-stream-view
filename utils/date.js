const DAYS = process.env.DAYS;

export const ago = (days = DAYS) => {
  const date = new Date(new Date().setDate(new Date().getDate() - days));
  return [
    date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
    date.getDate() > 9 ? date.getDate() : "0" + date.getDate(),
    date.getFullYear()
  ].join("/");
};
