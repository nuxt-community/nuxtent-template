module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Content Site name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Site description',
      'default': 'Nuxt.js Content Site'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}/site\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
