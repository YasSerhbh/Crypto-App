import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

// Options
var cryptoHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'dbc9a9236bmsh739de702e5fe09ep1e57eejsn90ea05c93668',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
var baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url , headers: cryptoHeaders})
// 





export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const {useGetNewsQuery} = newsApi;