"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CldUploadButton } from 'next-cloudinary';
import { toast } from '@/components/ui/use-toast';

function PostAJob() {
  const [selectedJob, setSelectedJob] = useState("");
  const [companyLogo, setCompanyLogo] = useState(false);
  const [form, setForm] = useState({
    jobtitle: "",
    description: "",
    qualification: "",
    last_date: "",
    job_type: "",
    company_logo: "",
    email: "",
    country: "",
    number_of_post: "",
    experience: "",
    specialization_req: "",
    salary: "",
    company: "",
    website_url: "",
    address: "",
    state: "",
  });

  const handleCompangLogo = (result: any) => {
    setForm((prevState: any) => ({
      ...prevState,
      company_logo: result.info.secure_url
    }));
    if (result.info.secure_url) {
      setCompanyLogo(true);
      toast({
        title: "Upload successful",
        description: "Company logo uploaded successfully",
      });
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
 console.log(form)
    try {
      const response = await fetch('/api/addjob', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast({
          title: "Job added successfully",
          description: "Your job posting has been added.",
        });
      } else {
        toast({
          title: "Failed to add job",
          description: "An error occurred while adding the job.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "An error occurred while adding the job.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className=" w-full mx-auto p-8 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-extrabold underline underline-offset-2 italic  mb-8">Job posted by user</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium ">Job Title</label>
            <Input name="jobtitle" value={form.jobtitle} onChange={handleChange} placeholder="Enter job title" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Number of Posts</label>
            <Input name="number_of_post" value={form.number_of_post} onChange={handleChange} placeholder="Enter number of posts" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Description</label>
            <Input name="description" value={form.description} onChange={handleChange} placeholder="Enter job description" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Experience Required</label>
            <Input name="experience" value={form.experience} onChange={handleChange} placeholder="Enter required experience" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Qualification/Education Required</label>
            <Input name="qualification" value={form.qualification} onChange={handleChange} placeholder="Enter required qualification/education" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Specialization Required</label>
            <Input name="specialization_req" value={form.specialization_req} onChange={handleChange} placeholder="Enter required specialization" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Last Date to Apply</label>
            <Input type='date' name="last_date" value={form.last_date} onChange={handleChange} placeholder="Enter last date to apply" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Salary</label>
            <Input name="salary" value={form.salary} onChange={handleChange} placeholder="Enter salary" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Job Type</label>
            <Select onValueChange={(value) => setForm({ ...form, job_type: value })} value={form.job_type}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Job Type</SelectLabel>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="engineer">Engineer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium ">Company/Organization Name</label>
            <Input name="company" value={form.company} onChange={handleChange} placeholder="Enter company/organization name" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Company/Organization Logo</label>
            <CldUploadButton
              className="w-full text-left border-2 p-1 rounded-md"
              onSuccess={handleCompangLogo}
              uploadPreset="wyyzhuyo"
            />
            {companyLogo ? <p className="text-green-600 text-left">Upload successful</p> : <p className="text-red-700 text-left">Please upload logo (.jpg/.png)</p>}
          </div>
          <div>
            <label className="block text-sm font-medium ">Website</label>
            <Input name="website_url" value={form.website_url} onChange={handleChange} placeholder="Enter website URL" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <Input name="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Address</label>
            <Input name="address" value={form.address} onChange={handleChange} placeholder="Enter address" />
          </div>
          <div>
            <label className="block text-sm font-medium ">Country</label>
            <Input name="country" value={form.country} onChange={handleChange} placeholder="Enter country" />
          </div>
          <div>
            <label className="block text-sm font-medium ">State</label>
            <Input name="state" value={form.state} onChange={handleChange} placeholder="Enter state" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button type="submit" className="w-full max-w-md bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200">Add Job</Button>
        </div>
      </form>
    </div>
  );
}

export default PostAJob;
