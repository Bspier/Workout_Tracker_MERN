import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import { body, validationResult }  from 'express-validator';
import cors from 'cors';

const PORT = process.env.PORT || 5000

const app = express();

const corsOptions = {
  origin: 'https://workout-tracker-mern-3.onrender.com', // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false,
};
app.use(cors(corsOptions));

app.use(express.json());

/**
 * Create a new exercise with the name, reps, weight, unit and date provided in the body
 */



app.post('/exercises', 
    body('name').isLength({ min: 1}),
    body('reps').isInt({gt: 0}),
    body('weight').isInt({gt: 0}),
    body('unit').isIn(["kgs", "lbs"]),
    body('date').isDate(),
    (req, res) => {
        console.log("POST /exercises hit");
        console.log("Incoming data:", req.body);
        const errors = validationResult(req);
        console.log("Validation result:", errors.array());
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({Error: 'Request failed'});
            })
        
});


/**
 * Retrive the exercise corresponding to the ID provided in the URL.
 */
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null){
                res.json(exercise)
            }
            else{
                res.status(404).json({ Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed'})
        });
});

/**
 * Retrieve exercises. 
 * If the query parameters include a reps, then only the exercises for that reps are returned.
 * Otherwise, all exercises are returned.
 */
app.get('/exercises', (req, res) => {
   let filter = {};

   if (req.query.reps !== undefined) {
       filter = { reps: req.query.reps};
   }
   exercises.findExercise(filter, '', 0)
        .then(exercises => {
            res.json(exercises);
        })
        .catch(error => {
                console.error(error);
                res.status(400).json({ Error: 'Request failed'});
        });
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, unit and date to the values provided in the body.
 */
app.put('/exercises/:_id', body('name').isLength({ min: 1}),
    body('reps').isInt({gt: 0}),
    body('weight').isInt({gt: 0}),
    body('unit').isIn(["kgs", "lbs"]),
    body('date').isDate(), 
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
        const update = {name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date}
        exercises.replaceExercise(req.params._id, update)
            .then(modifiedCount => {
                if (modifiedCount === 1 ){
                    res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
                }
                else{
                    res.status(404).json({ Error: 'Resource not found'});
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({ Error: 'Request failed'});
            });
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed'});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});