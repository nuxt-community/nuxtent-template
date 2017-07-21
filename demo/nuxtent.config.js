module.exports = {
  content: {
    routeName: 'content',
    permalink: ':slug',
    isPost: false
  },
  api: {
    baseURL: (isProd) => isProd ? 'https://nuxtent-starter.now.sh' : 'http://localhost:3000'
  }
}
