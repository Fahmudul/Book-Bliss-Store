import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/order/get-orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ _id, status }) => ({
        url: `/order/change-order-status/${_id}?status=${status}`,
        method: "PATCH",
      }),
    }),
    verifyOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/verify-order?order_id=${orderId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useVerifyOrderMutation,
} = orderApi;
