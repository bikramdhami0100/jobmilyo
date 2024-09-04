import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
     color: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userVerify: {
        type: Boolean,
        default: false,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    contactDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usercontacts"
    },
    forgotpassword:{
        type:Boolean,
        default:false
    }
    // userInformation:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:""
    // }
});

// Create the model
 const Usersignup=mongoose.models.usersignups|| mongoose.model('usersignups', userSchema);

export default Usersignup;