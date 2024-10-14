// // api/evaluation/routes.ts
// import express, { Request, Response } from 'express';
// import Evaluation from '../../../models/Evaluation'; // Adjust the path as necessary

// const router = express.Router();

// // Get all evaluations
// router.get('/', async (req: Request, res: Response) => {
//   try {
//     const evaluations = await Evaluation.find();
//     res.status(200).json(evaluations);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving evaluations.' });
//   }
// });

// // Create a new evaluation
// router.post('/', async (req: Request, res: Response) => {
//   const { studentName, studentId, tasksPerformed, learningExperience, overcomingChallenges, comments } = req.body;

//   const newEvaluation = new Evaluation({
//     studentName,
//     studentId,
//     tasksPerformed,
//     learningExperience,
//     overcomingChallenges,
//     comments,
//   });

//   try {
//     const savedEvaluation = await newEvaluation.save();
//     res.status(201).json(savedEvaluation);
//   } catch (error) {
//     res.status(400).json({ message: 'Error saving evaluation.' });
//   }
// });

// // Get evaluation by ID
// router.get('/:id', async (req: Request, res: Response) => {
//   try {
//     const evaluation = await Evaluation.findById(req.params.id);
//     if (!evaluation) return res.status(404).json({ message: 'Evaluation not found.' });
//     res.status(200).json(evaluation);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving evaluation.' });
//   }
// });

// // Update an evaluation
// router.put('/:id', async (req: Request, res: Response) => {
//   try {
//     const updatedEvaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedEvaluation) return res.status(404).json({ message: 'Evaluation not found.' });
//     res.status(200).json(updatedEvaluation);
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating evaluation.' });
//   }
// });

// // Delete an evaluation
// router.delete('/:id', async (req: Request, res: Response) => {
//   try {
//     const deletedEvaluation = await Evaluation.findByIdAndDelete(req.params.id);
//     if (!deletedEvaluation) return res.status(404).json({ message: 'Evaluation not found.' });
//     res.status(204).send(); // No content to send back
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting evaluation.' });
//   }
// });

// export default router;
