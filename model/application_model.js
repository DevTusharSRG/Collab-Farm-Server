const {Schema,model} = require("mongoose")

const ApplicationSchema = new Schema ({
    username:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    company:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    propertyid:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
    },
})

const Application = new model("Application",ApplicationSchema);
module.exports = Application;