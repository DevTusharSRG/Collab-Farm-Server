const {Schema,model} = require("mongoose")

const propertySchema = new Schema ({
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
    address:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image1:{
        type:String,
        require:true,
    },
    image2:{
        type:String,
        require:true,
    },
    image3:{
        type:String,
        require:true,
    },
    surveyno:{
        type:String,
        require:true,
    },
    area:{
        type:String,
        require:true,
    },
    for:{
        type:String,
        require:true,
    },
    proof:{
        type:String,
        require:true,
    },
})

const Property = new model("Addproperty",propertySchema);
module.exports = Property;