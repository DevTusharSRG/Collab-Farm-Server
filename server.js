require('dotenv').config();
const express = require("express")
const cors = require("cors")
const app = express()

const authRouter = require("./router/auth_router")
const contactRouter = require("./router/contact_router")
const AddPropertyRout = require("./router/property_router")
const application = require("./router/application_router")
const service = require("./router/service_router")
const getservice = require("./router/getService_router")
const getUsers = require('./router/admin_router')
const getContact = require('./router/getContact_router')
const userDelete = require('./router/userDelete_router')
const contactDelete = require('./router/contactDelete_router')
const serviceDelete = require('./router/deleteService_router')
const getProperties = require('./router/getProperty_router')
const connectDb = require("./utils/db")
const { config } = require('dotenv');
const errorMiddleware = require('./middleware/error_middleware');


app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,PUT,POST,PAtCH,DELETE,HEAD",
    credential:true
}
app.use(cors(corsOption))
app.use(express.json())
app.use("/",authRouter)
app.use("/form",contactRouter)
app.use("/form",AddPropertyRout)
app.use("/form",application)
app.use("/form",service)
app.use("/data",getservice)
app.use("/admin",getUsers)
app.use("/admin",getContact)
app.use("/admin",userDelete)
app.use("/admin",contactDelete)
app.use("/admin",serviceDelete)
app.use("/",getProperties)
app.use(errorMiddleware)

PORT=4000;

connectDb().then(()=>{
        app.listen(PORT,()=>{
            console.log(`server running on the port ${PORT}`);
        })
        
})