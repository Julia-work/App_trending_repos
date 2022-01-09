// import axios from "axios";
import { setRepos } from "../../reducers/reposReducers";
import githubTrends from 'github-trends-api';

export const getRepos = (options) => {
  return async(dispatch) => {
    const response = await githubTrends(options)
    dispatch(setRepos(response))
  }
}

//! Methods
// const options = {
//   section?: '', // default: empty (repositories) - or 'developers'
//   language?: '' // default: empty (all) - or 'javascript', 'java' etc..
//   since?: '' // default: empty (daily) - or 'weekly', 'monthly'
//   spoken_language_code?: '' // default: empty (all) - or en - fs - zh ...
// }

// githubTrends(options: Object): Promise

//! Developers
// githubTrends({ section: 'developers', since: 'weekly' })
//   .then(result => { console.log(result) })
//   .catch(error => { console.log(error) })

//! By axios
// export const getRepos = () => {
//   return async(dispatch) => {
//     const response = await axios.get('https://gh-trending-api.herokuapp.com/repositories')
//     console.log(response.data);
//     dispatch(setRepos(response.data))
//   }
// }