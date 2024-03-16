export default {
  base: "./",
  server: {
    // host: true,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
};
