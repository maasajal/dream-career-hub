import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={`text-center my-8 ${dataLength === jobs.length ? 'hidden' : ''}`}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn px-8 border border-[#7E90FE] text-[#7E90FE]"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};
export default FeaturedJobs;
