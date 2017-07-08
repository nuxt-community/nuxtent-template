module.exports = {
  srcDir: "../content",
  dirs: [
    ['/posts', {
      routeName: 'post',
      permalink: ':slug'
    }]
  ]
}
