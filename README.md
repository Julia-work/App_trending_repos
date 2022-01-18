# Github trending page clone

1. im facing CORS problem when getting data from all of the following sources from task.

To solve this problem, I installed the following chrome extension [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino)

To start the project, you need to do the same.

2. I took the data for the application from [this library](https://www.npmjs.com/package/github-trends-api)

Received responses don't contain any data related to **Sponsor**.

Also the value of the field  **description** was being mocked since we receive empty string from API.

3. Some ui components may differ since i used MATERIAL UI lib
