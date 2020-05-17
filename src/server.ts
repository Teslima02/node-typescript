import "dotenv/config";
import * as mongoose from "mongoose";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import PostsController from "./posts/posts.controller";
import AuthenticationController from "./authentication/authentication.controller";

validateEnv();

const app = new App([new PostsController(), new AuthenticationController()]);

app.listen();
