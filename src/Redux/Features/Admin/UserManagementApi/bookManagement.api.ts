import { baseApi } from "../../../api/baseApi";

const bookMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "/books/get-all-books",
        method: "GET",
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/get-book/${id}`,
        method: "GET",
      }),
    }),

    publishBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-new-book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  usePublishBookMutation,
} = bookMangementApi;
