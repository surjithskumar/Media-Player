const JSONServer = require('json-server')
// import JSONServer from 'json-server'

//media player il oru server create cheythu
const MpServer = JSONServer.create()

//to pass data to server
const router = JSONServer.router('db.json')
const middleware = JSONServer.defaults()

const port = 3000 || process.env.PORT

MpServer.use(middleware)
MpServer.use(router)

//to run this port
MpServer.listen(port,()=>{
    console.log(`Media-Player Server Started running at PORT : ${port} & waiting for the client request`);
})