import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: 'https://successfultr-api.onrender' }),
    tagTypes:['User','Product', 'Favorites' ],
    endpoints: builder =>({})

})