const DEV_URL = 'http://localhost:3001';
const PROD_URL = 'https://quiet-temple-79292.herokuapp.com';
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default API_ROOT
