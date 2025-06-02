import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Reps</th>
                        <th className="py-3 px-4 text-left">Weight</th>
                        <th className="py-3 px-4 text-left">Unit</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {exercises.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                                No exercises found. Add one to get started!
                            </td>
                        </tr>
                    ) : (
                        exercises.map((exercise, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="py-3 px-4 text-black">{exercise.name}</td>
                                <td className="py-3 px-4 text-black">{exercise.reps}</td>
                                <td className="py-3 px-4 text-black">{exercise.weight}</td>
                                <td className="py-3 px-4 text-black">{exercise.unit}</td>
                                <td className="py-3 px-4 text-black">{exercise.date.substring(0, 10)}</td>
                                <td className="py-3 px-4 text-black">
                                    <div className="flex justify-center space-x-3">
                                        <button
                                            onClick={() => onEdit(exercise)}
                                            className="p-1 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-100 focus:outline-none"
                                            title="Edit"
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(exercise._id)}
                                            className="p-1 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100 focus:outline-none"
                                            title="Delete"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ExerciseList
