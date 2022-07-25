import { useQuery } from "@apollo/client/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import AnimeCard, {CardBody, CardImage} from "../components/Card/AnimeCard"
import Button from "react-bootstrap/esm/Button"
import Navigation from "../components/Navbar/Navigation"
import styled from '@emotion/styled'
import { FAVORITE_ANIME } from "../lib/queries/FavoriteAnime"

export default function Favorites(){
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('fav')))

  const {loading, error, data} = useQuery(FAVORITE_ANIME, {
    variables: {
      ids : fav,
      page : 1,
      perPage : 100
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
  <h3 className="text-center" id="title">Your Favorites</h3>
  <Container className="d-flex flex-wrap justify-content-around py-4">{data.Page.media.map((anime, i)=>{
  return <AnimeCard key={anime.id}>
    <CardImage src={anime.coverImage.large}/>
    <CardBody>
      <StyledTitle>{anime.title.romaji}</StyledTitle>
      <Link to={`/${anime.id}`} className="text-center">
        <StyledButton className="btn btn-danger">Details</StyledButton>
      </Link>
    </CardBody>
  </AnimeCard>
})}</Container>
</div>

}