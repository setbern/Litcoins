const isProduction = process.env.NODE_ENV === 'production';
const API_VERSION = 1;

// const API_BASE_URL = isProduction ? 'http://setbiz.setcoins.com' : 'http://localhost:3000';
const API_BASE_URL = 'http://localhost:3000';

export const API_ROOT = `${API_BASE_URL}/v/${API_VERSION}/`;
export const TEST_IMAGE = 'http://i.imgur.com/81qyN1y.jpg';