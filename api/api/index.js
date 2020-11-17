import express from 'express'
import bodyparser from 'body-parser'
import config from 'dotenv'
import cors from 'cors'

import incidentRoutes from './server/routes/incidentRoutes';
import userRoutes from "./server/routes/userRoutes";

import fs from 'fs'
import util from 'util'


config.config()

const app=express()
const port = process.env.PORT || 8080

if(process.env.NODE_ENV == "production"){
	var log_file = fs.createWriteStream(__dirname + '/debug.log',{flags: 'w'})
	console.log = function(d){
		log_file.write(util.format(d)+'\n');
	}
}

//basic starter middlewares
app.use(cors())
app.use(bodyparser.json({limit:'50mb'}))
app.use(bodyparser.urlencoded({limit:'50mb',extended:false}))
app.get('/',(req,res)=>{
	res.send("Welcome to the Incidence Reporting and Monitoring API")
})
app.use(express.static(__dirname + '/public'));

//protected enum routes
//app.use('/enum',checktoken.checkToken,enumRoutes)


app.use(incidentRoutes);
app.use(userRoutes);


app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
	console.log(process.env.SECRET_KEY)
})

export default app;
