
import { Router } from './Router';

import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom';

// const GET_LESSONS_QUERY = gql`
//   query{
//     lessons{
//       id
//       title
//     }
//   }
// `

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // useEffect(()=>{
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // },[])

  // const {data} = useQuery <{lessons:Lesson[]}>(GET_LESSONS_QUERY)

  // console.log(data)

  return (
    <ApolloProvider client = {client}>
      <BrowserRouter >
      <Router />
      </BrowserRouter>
    </ApolloProvider>
    

  )
}

export default App
