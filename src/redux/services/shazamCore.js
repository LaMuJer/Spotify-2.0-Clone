
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '55a5fb5e97msh30fccddcfd2acdfp14118djsn1ba287ea0954')
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts : builder.query({ query: () => `/charts/world` })
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi