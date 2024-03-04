export const isEmpty = (value?: string): value is undefined =>
  typeof value === "string" && value.trim().length === 0;
