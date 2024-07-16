import mongoose from "mongoose"
const jobSchema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  last_date: {
    type: Date,
    required: true
  },
  job_type: {
    type: String,
    required: true,
    trim: true
  },
  company_logo: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  number_of_post: {
    type: Number,
    required: true
  },
  experience: {
    type: String,
    required: true,
    trim: true
  },
  specialization_req: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  website_url: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usersignups',
    required: true
  }
}, {
  timestamps: true
});

export const PostAJob =mongoose.models.postajob|| mongoose.model('postajob', jobSchema);
// export default PostAJob

