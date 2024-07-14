const {Schema,model} = require("mongoose")

const serviceSchema = new Schema ({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    provider:{
        type:String,
        require:true,
    },
})

const Service = new model("Service",serviceSchema);
module.exports = Service;