import mongoose from "mongoose";

const userContactSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'usersignups',
      required: true
    },
    userName:{
        type:String,
        required:true
    },
    // phoneNumber: {
    //   type: String,
    // //   required: true,
    //   trim: true
    // },
    // address: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    // city: {
    //   type: String,
    // //   required: true,
    //   trim: true
    // },
    // state: {
    //   type: String,
    // //   required: true,
    //   trim: true
    // },
    // country: {
    //   type: String,
    // //   required: true,
    //   trim: true
    // },
    // postalCode: {
    //   type: String,
    // //   required: true,
    //   trim: true
    // },
    email:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        
    }
  }, {
    timestamps: true
  });
  
  const UserContact = mongoose.models.usercontacts || mongoose.model('usercontacts', userContactSchema);
  export default UserContact;
  