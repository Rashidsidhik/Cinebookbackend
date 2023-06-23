module.exports = {
  apps: [
    {
      name: 'Server',
      script: 'app.js', // Replace with the actual entry point file of your application
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        DB=mongodb+srv://rashidps44:eKqrd1QvKeyq4p7d@cluster0.0i0pqds.mongodb.net/ticket
JWTPRIVATEKEY=mysocialmediamizu123
SALT=10
JWTPRIVATEKEYADMIN=myclimaxadmin123
JWTPRIVATEKEYTHEATER=myclimaxtheater123
NODEMAIL_USER="rashidps44@gmail.com"
NODEMAIL_PASS="gxaeopupssccxzl"
PORT=3000
STRIPE_SECRET_KEY=sk_test_51NGGAgSILY9DnJe4TET7KhHKn0JAQT3tDYpoRc5FZ9vMvnwaSzeh3R8BgGNWIBRsepfJCSonb3fu5htCaktIgoWh00vHoYFfMf
STRIPE_PUBLISHABLE_KEY=pk_test_51NGGAgSILY9DnJe4VlW3FsMtvCmzwoWswmOUxB1qAaR3C8fDkhxexUj55MPEjIvRLpWsdXzmugcUPpHQFrGoxJf700dbWMrSda
climaxtheater=https://cinebooktheater.netlify.app
climaxadmin=https://cinebookadmin.netlify.app
climaxflix=https://cinebooke.netlify.app

      },
    },
  ],
};
