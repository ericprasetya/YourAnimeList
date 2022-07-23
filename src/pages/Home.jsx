import { useQuery } from "@apollo/client/react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ALL_ANIME } from "../lib/queries/AllAnime"
import Container from "react-bootstrap/Container"
import AnimeCard, {CardBody, CardImage} from "../components/Card/AnimeCard"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"
import Navigation from "../components/Navbar/Navigation"

export default function Home(){
  const {loading, error, data} = useQuery(ALL_ANIME, {
    variables: {
      page: 1,
      perPage : 50,
    }
  })
  const [fav, setFav] = useState([]) //cuman simpen id si fav

  if(loading) return <p>Loading...</p>
  if(!loading) console.log(data)
  
  const handleFav = (query)=>{
    let newArr = [...fav]
    let found = fav.indexOf(query)
    if(found === -1){
      newArr.push(query)
    }else{
      newArr.splice(found, 1)
    }
    setFav(newArr)
  }

  return <div>
    <Navigation />
    <Container className="d-flex flex-wrap justify-content-around py-4">{data.Page.media.map((anime, i)=>{
    let isFav = fav.indexOf(anime.id) !== -1
    return <AnimeCard key={anime.id}>
      <CardImage src={anime.coverImage.large}/>
      <CardBody>
        {/* <Link to={`/${anime.id}`}>
        </Link> */}
          <Card.Title>{anime.title.romaji}</Card.Title>
        <Button className="">Details</Button>
      </CardBody>
    </AnimeCard>
  })}</Container>
  </div>
}