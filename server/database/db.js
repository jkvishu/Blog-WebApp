import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog.1vzsv3o.mongodb.net/?retryWrites=true&w=majority&appName=blog`;
    try {
        //also this function mongoose.connect is a Asynchronous function that means it will return a promise and therefore we have to use await keyword so that it can wait 
        await mongoose.connect(URL);
        //useNewUrlParser telling mongodb that old url has depriciated and u need to parse a new url each time
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;