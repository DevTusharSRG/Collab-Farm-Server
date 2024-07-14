const {z} = require("zod")

const signupSchema =z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"minimum characters is 3"})
    .max(255,{message:"maximum characters are 255"}),
    email:z
    .string({required_error:"name is required"})
    .trim()
    .email({message:"please enter a valid email"})
    .min(3,{message:"minimum characters is 3"})
    .max(255,{message:"maximum characters are 255"}),
    phone:z
    .string({required_error:"name is required"})
    .trim()
    .min(10,{message:"minimum characters is 10"})
    .max(15,{message:"maximum characters are 15"}),
    address:z
    .string({required_error:"name is required"})
    .trim()
    .min(7,{message:"minimum characters is 7"})
    .max(255,{message:"maximum characters are 255"}),
    type:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"minimum characters is 3"})
    .max(255,{message:"maximum characters are 255"}),
    password:z
    .string({required_error:"name is required"})
    .trim()
    .min(7,{message:"minimum characters is 7"})
    .max(255,{message:"maximum characters are 255"}),

})

module.exports = signupSchema