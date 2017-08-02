module.exports = {
  content: {
    permalink: ':slug',
    routes: [
      {
        path: '/_content',
        method: 'get'
      }
    ],
    isPost: false
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://nuxtent-template.now.sh'
      : 'http://localhost:3000'
  }
}
