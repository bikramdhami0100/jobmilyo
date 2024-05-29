"use client"
import { useState } from 'react';
import MultiSelect from "../error/Multipleselect"

export default function Home() {
  const [skills, setSkills] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skill Selector</h1>
      <MultiSelect skills={skills} setSkills={setSkills} />
      {/* <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Selected Skills</h2>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index} className="mb-1">{skill}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
