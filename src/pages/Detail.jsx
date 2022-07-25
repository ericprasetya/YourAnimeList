import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client/react';
import { ANIME_DETAILS } from '../lib/queries/AnimeDetail';
import Container from "react-bootstrap/Container"
import Navigation from '../components/Navbar/Navigation';
import { Button, Card } from 'react-bootstrap';
import parse from 'html-react-parser';
import { useEffect, useState } from "react"


export default function Detail() {
  const {id} = useParams();
  const {loading, error, data} = useQuery(ANIME_DETAILS, {
    variables: {
      id : id,
    }
  })
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('fav')))
  
  useEffect(() => {
    const FAV = JSON.parse(localStorage.getItem('fav'));
    if (FAV) {
      setFav(FAV);
    }
  }, [])
  const isFav = (id && fav && fav.indexOf(parseInt(id)) !== -1)
  const [toggleFav, setToggleFav] = useState(isFav? "-" : "+")

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  const handleFav = (query)=>{
    let newArr = []
    let found = 0
    if(fav){
      newArr = [...fav]
      found = fav.indexOf(query)
    }
    if(found === -1){
      newArr.push(query)
      setToggleFav("-")
    }else{
      newArr.splice(found, 1)
      setToggleFav("+")
      
    }
    setFav(newArr)
    localStorage.setItem('fav', JSON.stringify(newArr))
  }

  return (
    <div>
      <Navigation />
      <div className='container'>
        <Card>
          <Card.Header>
            <h4>
            {data.Media.title.romaji}
            </h4>
            {data.Media.title.english}
          </Card.Header>
          <Card.Body className='mx-0 px-2'>
            <div className='d-flex justify-content-around p-2'>
              <Card.Img style={{ width: 'auto', height: '350px' }} src={data.Media.coverImage.large}  />
              <div className='ms-3 text-end'>
                <h5 className='mb-0'>Score</h5>
                <i className="bi bi-star-fill fs-4">{data.Media.averageScore / 10}</i>

                <h5 className='mt-2 mb-0'>Popularity</h5>
                <p>#{data.Media.popularity}</p>

                <h5 className='mt-2 mb-0'>Studio</h5>
                <p>{data.Media.studios.nodes[0].name}</p>
                <button className={isFav? 'btn btn-outline-danger' : 'btn btn-danger'} onClick={()=>handleFav(data.Media.id)} >{toggleFav}Fav</button>

              </div>
            </div>
            <div className="row text-center my-2 ">
              <div className='col'>
                {data.Media.seasonYear}
              </div>
              <div className='col'>
                {data.Media.status}
              </div>
              <div className='col'>
                {data.Media.duration} min
              </div>
            </div>
            <div className='col text-center my-2 fst-italic text-primary' style={{  }}>
              {data.Media.genres.map(genre => {
                return genre + '  '
              })}
            </div>
            <div className='col'>
              <h6 className="text-center">Description</h6>
              <Card.Text>
                {parse(data.Media.description)}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}