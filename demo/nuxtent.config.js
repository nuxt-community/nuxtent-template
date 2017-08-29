module.exports = {
  content: {
    permalink: ':slug',
    page: '/_content',
    isPost: false
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://nuxtent-template.now.sh'
      : 'http://localhost:3000'
  }
}
