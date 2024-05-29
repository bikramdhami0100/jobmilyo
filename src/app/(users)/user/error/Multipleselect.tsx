"use client"
import { useState } from 'react';
const MultiSelect = ({ skills, setSkills }:any) => {
  const [newSkill, setNewSkill] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleEditSkill = (index:any) => {
    setNewSkill(skills[index]);
    setIsEditing(index);
    setIsPopoverOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedSkills = skills.map((skill:any, index:any) => 
      index === isEditing ? newSkill : skill
    );
    setSkills(updatedSkills);
    setNewSkill('');
    setIsEditing(null);
    setIsPopoverOpen(false);
  };

  const handleDeleteSkill = (index:any) => {
    setSkills(skills.filter((_:any, i:any) => i !== index));
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
    setNewSkill('');
    setIsEditing(null);
  };

  return (
    <div className="p-4">
      <button onClick={togglePopover} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        {isPopoverOpen ? 'Close' : 'Add Skill'}
      </button>
      {isPopoverOpen && (
        <div className="mb-4 p-4 border border-gray-300 bg-white rounded-md shadow-md">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            className="p-2 border border-gray-300 rounded-md mr-2"
          />
          <button 
            onClick={isEditing !== null ? handleSaveEdit : handleAddSkill} 
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            {isEditing !== null ? 'Save' : 'Add'}
          </button>
        </div>
      )}
      <ul>
        {skills.map((skill:any, index:any) => (
          <li key={index} className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded-md">
            {skill}
            <div>
              <button 
                onClick={() => handleEditSkill(index)} 
                className="px-2 py-1 bg-yellow-500 text-black rounded-md mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDeleteSkill(index)} 
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
