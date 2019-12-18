
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./drupal-react-bill-estimator-shared.cjs.production.min.js')
} else {
  module.exports = require('./drupal-react-bill-estimator-shared.cjs.development.js')
}
