import { gql } from "@apollo/client";

export const ALL_ANIME = gql`query AllAnime($page:Int, $perPage: Int, $search: String){
  Page(page:$page, perPage: $perPage) {
    media(type:ANIME, sort: TRENDING_DESC, search: $search) {
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