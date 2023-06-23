module.exports = {
  apps: [
    {
      name: 'Server',
      script: 'app.js', // Replace with the actual entry point file of your application
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
