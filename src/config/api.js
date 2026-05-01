const raw =
  process.env.REACT_APP_API_URL || "http://localhost:4000/api";

export const API_BASE_URL = raw.replace(/\/+$/, "");
