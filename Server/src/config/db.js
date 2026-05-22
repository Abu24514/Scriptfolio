import mongoose from "mongoose";
async function connectDB() {

    try {
        mongoose.connection.on("connected", ()=>{console.log("Database connected Successfully")})

        let mongodbURL = process.env.MONGODB_URL;
        const projectName = 'resume-builder';

        if(!mongodbURL){
            throw new Error ("MONGODB_URL environment variable not set")
        }

        if(mongodbURL.endsWith('/')){
            mongodbURL = mongodbURL.slice(1,-1)
        }
         await mongoose.connect(`${mongodbURL}/${projectName}`);
        
    } catch (error) {
        console.error("Error connecting to MongoDB" , error);
        
    }
    
}

export default connectDB;