import { baseApi } from "../../../api/baseApi";

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/get-all-users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userManagementApi;
