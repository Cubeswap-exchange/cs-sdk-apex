
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cs-sdk-apex.cjs.production.min.js')
} else {
  module.exports = require('./cs-sdk-apex.cjs.development.js')
}
