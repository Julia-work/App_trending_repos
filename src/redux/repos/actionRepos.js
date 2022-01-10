import githubTrends from 'github-trends-api';

import { setRepos } from './reposReducer';

export const getRepos = (options) => {
  return async(dispatch) => {
    const response = await githubTrends(options)
    dispatch(setRepos(response))
  }
}
