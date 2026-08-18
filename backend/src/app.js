import cors from "cors";
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json()); // lets Express read JSON from req.body
import testMailRoute from "./routes/testMail.Route.js";

// app.use('/api/auth', authRoutes); // all auth routes now live under /api/auth
// app.use('/api', productRoutes); // all auth routes now live under /api
app.use("/api", testMailRoute);

export default app;