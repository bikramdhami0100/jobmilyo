"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const LocationSchema = z.object({
  location: z.enum(["any", "remote", "on-site", "near-me", "15km", "30km", "50km"], {
    required_error: "You need to select a location.",
  }),
});

const BudgetSchema = z.object({
  budget: z.enum(["any", "30000", "50000", "80000", "100000"], {
    required_error: "You need to select a budget.",
  }),
});

const PostingDateSchema = z.object({
  posting: z.enum(["any", "24hours", "3days", "7days"], {
    required_error: "You need to select a posting date.",
  }),
});

const ExperienceSchema = z.object({
  experience: z.enum(["any", "Entry Level", "Mid Level","Senior Level","Executive"], {
    required_error: "You need to select a work experience.",
  }),
});

const EmploymentTypeSchema = z.object({
  employment: z.enum(["any", "Full-time", "Part-time", "Internship","Remote","Temporary"], {
    required_error: "You need to select a type of employment.",
  }),
});

function SearchFilters({ selectField, setSelectField }: any) {
  const locationForm = useForm<z.infer<typeof LocationSchema>>({
    resolver: zodResolver(LocationSchema),
  });

  const budgetForm = useForm<z.infer<typeof BudgetSchema>>({
    resolver: zodResolver(BudgetSchema),
  });

  const dateForm = useForm<z.infer<typeof PostingDateSchema>>({
    resolver: zodResolver(PostingDateSchema),
  });

  const experienceForm = useForm<z.infer<typeof ExperienceSchema>>({
    resolver: zodResolver(ExperienceSchema),
  });

  const employmentForm = useForm<z.infer<typeof EmploymentTypeSchema>>({
    resolver: zodResolver(EmploymentTypeSchema),
  });

  const handleFieldChange = (field: string, value: string) => {
    setSelectField((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
    toast({
      title: "Filter updated",
      description: `Updated ${field} to ${value}`,
    });
  };
  console.log(selectField)
  return (
    <div>
      <h1>Filters</h1>
      <Form {...locationForm}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={locationForm.control}
            name="location"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => handleFieldChange("location", value)}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">Any</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="remote" />
                      </FormControl>
                      <FormLabel className="font-normal">Remote job</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="on-site" />
                      </FormControl>
                      <FormLabel className="font-normal">On-site job</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem  disabled value="near-me" />
                      </FormControl>
                      <FormLabel className="font-normal">Near me</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem disabled value="15km" />
                      </FormControl>
                      <FormLabel className="font-normal">Within 15 km</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem disabled value="30km" />
                      </FormControl>
                      <FormLabel className="font-normal">Within 30 km</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem disabled value="50km" />
                      </FormControl>
                      <FormLabel className="font-normal">Within 50 km</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...budgetForm}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={budgetForm.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => handleFieldChange("budget", value)}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">Any</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="30000" />
                      </FormControl>
                      <FormLabel className="font-normal">30,000</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="50000" />
                      </FormControl>
                      <FormLabel className="font-normal">50,000</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="80000" />
                      </FormControl>
                      <FormLabel className="font-normal">80,000</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="100000" />
                      </FormControl>
                      <FormLabel className="font-normal">100,000</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Form {...dateForm}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={dateForm.control}
            name="posting"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Date of Posting</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => handleFieldChange("dateofposting", value)}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">Any</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="24hours" />
                      </FormControl>
                      <FormLabel className="font-normal">Last 24 hours</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="3days" />
                      </FormControl>
                      <FormLabel className="font-normal">Last 3 days</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="7days" />
                      </FormControl>
                      <FormLabel className="font-normal">Last 7 days</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...experienceForm}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={experienceForm.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Work Experience</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => handleFieldChange("experience", value)}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">Any</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Entry Level" />
                      </FormControl>
                      <FormLabel className="font-normal">Entry level</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Mid Level" />
                      </FormControl>
                      <FormLabel className="font-normal">Mid level</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Senior Level" />
                      </FormControl>
                      <FormLabel className="font-normal">Senior level</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Executive" />
                      </FormControl>
                      <FormLabel className="font-normal">Executive</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...employmentForm}>
        <form className="w-2/3 space-y-6">
          <FormField
            control={employmentForm.control}
            name="employment"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Type of Employment</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => handleFieldChange("experience", value)}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">Any</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Full-time" />
                      </FormControl>
                      <FormLabel className="font-normal">Full time</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Internship" />
                      </FormControl>
                      <FormLabel className="font-normal">Internship</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Remote" />
                      </FormControl>
                      <FormLabel className="font-normal">Remote</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Temporary" />
                      </FormControl>
                      <FormLabel className="font-normal">Temporary</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default SearchFilters;
