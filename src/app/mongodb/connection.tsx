import mongoose from "mongoose";

// Connect to MongoDB
const mongodbconn=mongoose.connect('mongodb+srv://bikramdhami334:lg9GERG9ZVQnRvry@cluster0.j7jdqso.mongodb.net/jobmilyo?retryWrites=true&w=majority&appName=Cluster0', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
export default mongodbconn;