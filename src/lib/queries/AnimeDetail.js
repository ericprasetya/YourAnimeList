import { gql } from "@apollo/client";

export const ANIME_DETAILS = gql`query AnimeDetail($id: Int){
  Media(id: $id){
    id
    title {
      romaji
      english
    }
    averageScore
    description
    seasonYear
    episodes
    duration
    bannerImage
    genres
    status
    coverImage{
      large
    }
    popularity
    studios(isMain:true) {
      nodes{
        name
      }
    }
  }
}
`