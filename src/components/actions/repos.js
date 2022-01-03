import axios from "axios";
import { setRepos } from "../../reducers/reposReducers";
import githubTrends from 'github-trends-api';

export const getRepos = () => {
  return async(dispatch) => {
    const response = await githubTrends()
    dispatch(setRepos(response))
  }
}

// export const getRepos = () => {
//   return async(dispatch) => {
//     const response = await axios.get('https://gh-trending-api.herokuapp.com/repositories')
//     console.log(response.data);
//     dispatch(setRepos(response.data))
//   }
// }