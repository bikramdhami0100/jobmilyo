import mongoose from 'mongoose';

const UserInformationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usersignups', required: true },
  fname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  PermanentAddress: {
    type: String,
    required: true
  },
  CurrentAddress: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  boardName: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  faculity: {
    type: String,
    required: true
  },
  educationtype: {
    type: String,
    required: true
  },
  gpaorpercentage: {
    type: String,
    required: true
  },
  passedDate: {
    type: Date,
    required: true
  },
  marksheet: {
    type: String,
    required: true
  },
  previouscompany: {
    type: String,
    required: true
  },
  previousrole: {
    type: String,
    required: true
  },
  interestedCategory: {
    type: String,
    required: true
  },
  interestedFiels: {
    type: String,
    required: true
  },
  interestedEmploymentType: {
    type: String,
    required: true
  },
  expectedPositionLevel: {
    type: String,
    required: true
  },
  uploadCV: {
    type: String,
    required: true
  },
  dateofBirth: {
    type: Date,
    required: true
  },
  skills: {
    type: [String], // Array of strings
    default: [] // Default to an empty array
  }
});



const UserInformation =mongoose.models.UserInformation|| mongoose.model('UserInformation',UserInformationSchema);
export default UserInformation;
