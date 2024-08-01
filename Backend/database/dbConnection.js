import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config({path: "./config/.env"})

// const dbConnection = () => {
//   mongoose.connect(process.env.MONGO_URI,{
//     dbName : "RESTAURANT"
//   }).then(()=>{
//     console.log("connect to database successfully!");
//   }).catch(()=>{
//     console.log(`error Coming in Database ${err}`);
//   });
//   // console.log(`${process.env.MONGO_URI}`)
// }

// // console.log(process.env.MONGO_URI);
// export default dbConnection
