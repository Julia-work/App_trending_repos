import axios from "axios";
import { setDevelopers } from '../../reducers/developersReducers';
import githubTrends from 'github-trends-api';

//! By github-trends-api
export const getDevelopers = (options) => {
  return async(dispatch) => {
    const response = await githubTrends(options)
    dispatch(setDevelopers(response))
  }
}

//! By axios
// export const getDevelopers = () => {
//   return async(dispatch) => {
//     const response = await axios.get('https://gh-trending-api.herokuapp.com/developers')
//     console.log(response.data);
//     dispatch(setDevelopers(response.data))
//   }
// }

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
