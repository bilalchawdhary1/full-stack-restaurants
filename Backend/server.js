import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server Runing on this port ${process.env.PORT}`);
});

