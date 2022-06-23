import {ApolloClient, InMemoryCache} from '@apollo/client'
export const client = new ApolloClient({
  uri : 'https://api-sa-east-1.graphcms.com/v2/cl4qbaywy3xwe01w75ps9hpa1/master',
  cache: new InMemoryCache()
})