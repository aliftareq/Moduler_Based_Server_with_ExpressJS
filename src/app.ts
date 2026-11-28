import express, {
  type Application,
  type Request,
  type Response,
} from "express";

//middleware-imports
import logger from "./middleware/logger";
import globalErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors";
import cookieParser from "cookie-parser";

//routes-imports
import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";

//app initalization
const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};
//response decoding
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//module based routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/profiles", profileRoute);

// apps root route response
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "This is root route",
    author: "Alif",
  });
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

export default app;
