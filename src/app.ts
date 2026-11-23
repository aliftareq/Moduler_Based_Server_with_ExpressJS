import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";

//app initalization
const app: Application = express();

//response decoding
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

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

export default app;
