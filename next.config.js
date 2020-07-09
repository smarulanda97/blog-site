require('dotenv').config();

const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  env: {
    API_URL: process.env.API_URL,
    IMAGES_URL: process.env.IMAGES_URL
  },
  webpack(config, options) {
    config.resolve.alias['api'] = path.join(__dirname, 'api');
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['themes'] = path.join(__dirname, 'themes');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    return config;
  }
});