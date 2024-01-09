import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials, logOut } from "../middleware/auth/authSlice";


const baseQuery = fetchBaseQuery({
  // baseUrl: "https://student-app-o1kg.onrender.com/api/v1/",
  baseUrl: "http://localhost:3000",
  credentials: "same-origin",
  // mode: "no-cors",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});


export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
