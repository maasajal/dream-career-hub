import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const jobsData = async () => {
      const response = await fetch("./jobs.json");
      const data = await response.json();
      setJobs(data);
    };
    jobsData();
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        sectionTitle="Featured Jobs"
        sectionDescription="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedJobs;
