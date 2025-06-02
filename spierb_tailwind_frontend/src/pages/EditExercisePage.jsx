import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers:{
                'Content-Type': 'application/json',
            },        
        });
        if (response.status === 200){
            alert("Successfully edited the exercise");
        }else{
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#33928c]">Edit Exercise</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                {/*Edit exercise name*/}
                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Exercise Name</label>
                    <div className='text-black'>
                        <input
                            type="text"
                            placeholder="Enter name here"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                <div className="w-full md:w-1/3">
                    {/*Edit number of reps*/}
                    <label className="block text-sm font-medium mb-1">Reps</label>
                    <div className='text-black'>
                        <input
                            type="number"
                            placeholder="Enter reps here"
                            value={reps}
                            min="0"
                            onChange={e => setReps(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                <div className="w-full md:w-1/3">
                    {/*Edit weight*/}
                    <label className="block text-sm font-medium mb-1">Weight</label>
                    <div className='text-black'>
                        <input
                            type="number"
                            placeholder="Enter weight here"
                            value={weight}
                            min="0"
                            onChange={e => setWeight(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                <div className="w-full md:w-1/3">
                    {/*Edit unit type*/}
                    <label className="block text-sm font-medium mb-1">Unit</label>
                    <div className='text-black'>
                        <select 
                            value={unit} 
                            onChange={e => setUnit(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                        </select>
                    </div>
                </div>
                
                <div className="w-full">
                    {/*Edit date*/}
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <div className='text-black'>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                
                <div className="w-full mt-4">
                    <button 
                        onClick={editExercise}
                        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditExercisePage;
