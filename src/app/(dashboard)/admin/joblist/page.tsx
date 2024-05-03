import React from 'react'
interface JobDetailType {
  Sr_No: number;
  jobTitle: string;
  No_of_Post: string;
  Qualification_Required: string;
  Experience_Required: string; // Corrected property name
  Last_Date_To_Apply: string;
  Company: string;
  State: string;
  Job_Posted_Date: string;
  Edit: string;
  Delete: string;
}
function JobList() {
  const jobDetails: JobDetailType[] = [
    {
      Sr_No: 1,
      jobTitle: "Web Development",
      No_of_Post: "5",
      Qualification_Required: "Bachelor's Degree in Computer Science",
      Experience_Required: "3 years",
      Last_Date_To_Apply: "2024-05-15",
      Company: "ABC Web Solutions",
      State: "California",
      Job_Posted_Date: "2024-05-01",
      Edit: "Edit",
      Delete: "Delete",
    },
    {
      Sr_No: 2,
      jobTitle: "App Development",
      No_of_Post: "3",
      Qualification_Required: "Bachelor's Degree in Software Engineering",
      Experience_Required: "2 years",
      Last_Date_To_Apply: "2024-05-20",
      Company: "XYZ Mobile Apps",
      State: "New York",
      Job_Posted_Date: "2024-05-02",
      Edit: "Edit",
      Delete: "Delete",
    },
    // Add more job details as needed
  ];
  
  return (
    <div>
      job list
    </div>
  )
}

export default JobList
