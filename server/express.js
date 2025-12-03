import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";
import authRoutes from "./routes/auth.routes.js";



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors({
  origin: "https://assignment-4-web-dev-portfolio-site.onrender.com",
  credentials: true,
}));

app.options("/*", cors());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);




app.get("/", (req,res) => {
    res.send("<h1>Portfolio backend is working</h1>");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({error: err.message});
});

export default app;