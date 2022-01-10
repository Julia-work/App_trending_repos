import githubTrends from 'github-trends-api';

import { setDevelopers } from './developersReducer';

export const getDevelopers = (options) => {
  return async(dispatch) => {
    const response = await githubTrends(options)
    dispatch(setDevelopers(response))
  }
}