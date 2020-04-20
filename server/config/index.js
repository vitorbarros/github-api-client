const API_BASE_URL = process.env.API_BASE_URL || 'https://api.github.com';

console.log('SERVER ENV >>>> ', {
  API_BASE_URL
});

const config = () => {
  return {
    API_BASE_URL
  };
};

module.exports = config;
