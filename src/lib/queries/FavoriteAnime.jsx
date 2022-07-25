import { gql } from "@apollo/client";

export const FAVORITE_ANIME = gql`query FavoriteAnime($page:Int, $perPage: Int, $ids: [Int]){
  Page(page:$page, perPage: $perPage) {
    media(id_in: $ids) {
      id
      title{
        romaji
      }
      coverImage{
        large
      }
    }
  }
}
`