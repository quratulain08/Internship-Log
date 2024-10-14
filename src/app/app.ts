// server.ts or app.ts
import express from 'express';
//import evaluationRoutes from '../app/api/evaluations/routes'; // Adjust the path based on your structure

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use evaluation routes
//app.use('/api/evaluations', evaluationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
