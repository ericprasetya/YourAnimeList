import styled from '@emotion/styled'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Home from './pages/Home';
import Detail from './pages/Detail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Favorites from './pages/Favorites';

export default function App(){
  const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: white;
    }
  `
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });

  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}