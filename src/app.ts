import express, { Application, Request,Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";

import cookieParser from "cookie-parser";
import { NotFoundHandler } from "./errors/NotFoundHandler";

export const app: Application = express();
//cors
app.use(cors());
//cookie
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//All Routes
app.use("/api/v1", routes);
// for testing

app.get('/', (req: Request, res: Response) => {
    res.send("API Works Successfully")
 
    // res.status(httpStatus.OK).json({
    //   success: true,
    //   message: 'API Works Successfully',
      
    // });
    
  });

//Global Error Handler
app.use(globalErrorHandler);

//handle not found
app.use(NotFoundHandler.handle);
