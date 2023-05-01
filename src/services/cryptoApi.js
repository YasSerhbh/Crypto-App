import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// Options
var cryptoHeaders = {
    // 'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'dbc9a9236bmsh739de702e5fe09ep1e57eejsn90ea05c93668',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
var baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url , headers: cryptoHeaders})
// 





export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getDetails:  builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        })
    })
})


export const {useGetCryptosQuery, useGetDetailsQuery, useGetHistoryQuery} = cryptoApi;