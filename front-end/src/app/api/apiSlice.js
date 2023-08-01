import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const url = process.env.BASEURL || "http://localhost:3500"
export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: url }),
    tagTypes:['User','Product', 'Favorites' ],
    endpoints: builder =>({})

})