import { useQuery } from "@apollo/client/react"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ALL_ANIME } from "../lib/queries/AllAnime"
import Container from "react-bootstrap/Container"
import AnimeCard, {CardBody, CardImage} from "../components/Card/AnimeCard"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"
import Navigation from "../components/Navbar/Navigation"
import styled from '@emotion/styled'

export default function Home(){
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  // console.log(query)
  const {loading, error, data} = useQuery(ALL_ANIME, {
    variables: {
      page: 1,
      perPage : 100,
      search: query
    }
  })

  if(loading) return <p>Loading...</p>
  if(!loading) console.log(data)
  
  const StyledTitle = styled.h1`
    font-size: 12px;
    text-align: center;
    margin-bottom: 1rem;
  `

  const StyledButton = styled(Button)`
    font-size: 8px;
    padding : 4px;
  `

  return <div>
    <Navigation />
    <Container className="d-flex flex-wrap justify-content-around py-4">{data.Page.media.map((anime, i)=>{
    return <AnimeCard key={anime.id}>
      <CardImage src={anime.coverImage.large}/>
      <CardBody>
        <StyledTitle>{anime.title.romaji}</StyledTitle>
        <Link to={`/${anime.id}`} className="text-center">
          <StyledButton>Details</StyledButton>
        </Link>
      </CardBody>
    </AnimeCard>
  })}</Container>
  </div>
}