import mongoose from 'mongoose';

// Education Sub-schema
const educationSchema = new mongoose.Schema({
  skill: [String],
  boardName: String,
  level: String,
  faculty: String,
  educationType: String,
  gpaOrPercentage: String,
  passedDate: Date,
  marksheet: String
}, { _id: false });

// Employment Sub-schema
const employmentSchema = new mongoose.Schema({
  previousCompany: String,
  previousRole: String,
  interestedCategory: String,
  interestedField: String,
  interestedEmploymentType: String,
  expectedPositionLevel: String,
  uploadedCv: String
}, { _id: false });

// UserInformation Schema
const userInformationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usersignups', required: true },
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  profile: String,
  phoneNumber: String,
  permanentAddress: String,
  currentAddress: String,
  educationInformation: [educationSchema],
  employmentInformation: [employmentSchema]
}, { timestamps: true });

const UserInformation =mongoose.models.UserInformation|| mongoose.model('UserInformation', userInformationSchema);
export default UserInformation;
