import mongoose from 'mongoose';

export const connectDB = async() =>{
    mongoose.set('strictQuery',true)
    try { const connection = await mongoose.connect(process.env.DB_CONNECT,{
        dbName: process.env.DB_NAME
    });

    console.log('Database Connected',connection.connection.host)
        
    } 
    
    catch (error)
     { console.log(error);
        
    }
   
}