import express from 'express';
import 'dotenv/config';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import {errors} from 'celebrate';
import authRoutes from './routes/authRoutes.js';
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(notesRoutes);
app.use(authRoutes);

app.use(notFoundHandler);
app.use(errors()); // Middleware для обробки помилок валідації Celebrate
app.use(errorHandler);

app.use(studentsRoutes);
app.use(authRoutes);
// Додаємо раути користувача
app.use(userRoutes);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
