import mongoose  from "mongoose";

export const connectDB = async() => {
    try {
      await mongoose.connect("mongodb+srv://dariodev584:KXmD0WBcrhwS6S3Z@coderback.fyyjm8j.mongodb.net/ecommerce?retryWrites=true&w=majority")
      console.log("Base de datos conectada correctamente")  
    } catch (error) {
        console.log("Error al conectar la base de datos", error.message)
    }
}