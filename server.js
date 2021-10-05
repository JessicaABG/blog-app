import express  from "express"
import db from './db/connection.js'
import postRoutes from "./routes/posts.js"

const PORT = process.env.PORT || 3000

import logger from "morgan"
import cors from "cors"

const app= express();
app.use(cors())
app.use(express.json())
app.use(logger('dev')) //should ask if dev is necessary or related to gh branch

app.use('/api', postRoutes);



db.on("connected", () => {
console.log("Connected to MongoDB!");
app.listen(PORT, () =>
    console.log(`Express server app is running on ${PORT}`)
  );
});
