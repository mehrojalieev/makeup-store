import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["Parfumes"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:2100"}),
    endpoints: (builder) => ({

        // GET
        getParfumes: builder.query({
            query: () => "/parfumes",
            providesTags: ["Parfumes"]
        }),

    })
})


export const {useGetParfumesQuery}  = apiSlice