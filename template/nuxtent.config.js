module.exports = {
  content: {
    routeName: 'content',
    permalink: ':slug',
    isPost: false
  },
  api: {
    baseURL: (isProd) => isProd ? 'http://localhost:3000' : 'http://localhost:3000'
  }
}
