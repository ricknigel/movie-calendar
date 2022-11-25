module.exports = {
  env: {
    WATCHPACK_POLLING: !!process.env.WATCHPACK_POLLING,
    BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
  },
  reactStrictMode: true,
  output: 'standalone'
};
