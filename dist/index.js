
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cs-sdk-classic.cjs.production.min.js')
} else {
  module.exports = require('./cs-sdk-classic.cjs.development.js')
}
