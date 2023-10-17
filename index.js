const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
const cookieParser  = require('cookie-parser')
const http =require('http').createServer(app)


// !! cors !

const cors = require('cors')

// importing routes 

const routes = require('./router/routes')


// !!!!!!!!!!!!!!!!!!!!! dbconnection !!!!!!!!!

// require('./config/connection')
const sequelize  = require('./config/dbconnection')


app.get('/',(req,resp)=>{
     resp.send('api working')
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Body parsing middleware using body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Body parsing middleware using body-parser
app.use(cookieParser())

app.use(cors({ origin: 'http://192.168.10.16:3000' }))



// !!!!!!!!!!!! using routes 


app.use('/',routes)


// Socket.io logic for real-time updates
// const io = require('socket.io')(http);

const packetModel = require('./models/packet')

const io = require('socket.io')(http, {
  // Configure CORS for socket.io
  cors: {
    origin: '*',
    methods: ['GET', 'POST'], // You can specify the allowed HTTP methods here
  },
});


io.on('connection', (socket) => {
  console.log('A user connected');

  packetModel.findAll().then((data) => {
    socket.emit('initialData', data);
  });

  // packetModel.afterCreate((data) => {
  //   socket.emit('newData', data);
  // });


  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
   








sequelize.sync().then(() => {
    console.log("database connected")
  http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});



