import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import connectDB from "./config/db.js"
import PlantRoutes from "./routes/plant.routes.js"
import job from "./config/cron.js"

const app = express()


job.start()
dotenv.config()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api', userRoutes)
app.use('/api', PlantRoutes)

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});