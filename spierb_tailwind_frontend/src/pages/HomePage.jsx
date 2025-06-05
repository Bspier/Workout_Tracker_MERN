import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE;
function HomePage({setExerciseToEdit}) {

    const [exercises, setExercise] = useState([]);
    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`${API_BASE}/exercises/${_id}`, { method: 'DELETE' });
        if(response.status === 204){
            setExercise(exercises.filter(e => e._id !== _id));
        } else{
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate("/edit-exercise")
    }

    const loadExercises = async () => {
        const response = await fetch(`${API_BASE}/exercises`);
        const data = await response.json();
        setExercise(data);
    }
    // call when first mounted
    useEffect(() =>{
        // pass emoty array, called when component mounted
        loadExercises();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#33928c]">List of Exercises</h1>
            <div className='mb-8'>
                <ExerciseList exercises={exercises} onDelete = {onDelete} onEdit = {onEdit}></ExerciseList>
            </div>

            <div>
                <Link to="/add-exercise"
                    className='w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    Add an Exercise
                </Link>
            </div>
        </div>
    );
}


export default HomePage;