import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: 'https://successfulta-api.onrender.com' }),
    tagTypes:['User','Product', 'Favorites' ],
    endpoints: builder =>({})

})