import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  return (
    <>
      <h2 className="text-4xl text-center my-8 font-extrabold">Job Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-20">
        <div className="col-span-2">
          <p className="my-6 leading-8">
            <strong>Job Description: </strong>
            {job.job_description}{" "}
          </p>
          <p className="my-6 leading-8">
            <strong>Job Responsibility: </strong>
            {job.job_responsibility}{" "}
          </p>
          <p className="my-6 leading-8">
            <strong>Educational Requirements: </strong>
          </p>
          <p className="leading-8"> {job.educational_requirements} </p>

          <p className="my-6 leading-8">
            <strong>Experiences: </strong>
          </p>
          <p className="leading-8"> {job.experiences} </p>
        </div>
        <div className="col-span-1 leading-8">
          <div className="bg-[#9873FF1A] p-5 rounded-xl mb-5">
            <h3>Job Details</h3>
            <hr className="my-5" />
            <h4 className="flex items-center gap-2">
              <AiOutlineDollarCircle className="text-[#9873FF] text-xl" />{" "}
              <strong>Salary:</strong> {job.salary} (Per Month)
            </h4>
            <h4 className="flex items-center gap-2">
              <MdOutlineSubtitles className="text-[#9873FF] text-xl" />{" "}
              <strong>Job Title:</strong> {job.job_title}
            </h4>
            <h3 className="mt-5">Contact Information</h3>
            <hr className="my-5" />
            <h4 className="flex items-center gap-2">
              <FiPhone className="text-[#9873FF] text-xl" />{" "}
              <strong>Phone:</strong> {job.contact_information.phone}
            </h4>
            <h4 className="flex items-center gap-2">
              <AiOutlineMail className="text-[#9873FF] text-xl" />{" "}
              <strong>Email:</strong> {job.contact_information.email}
            </h4>
            <h4 className="flex items-center gap-2">
              <SlLocationPin className="text-[#9873FF] text-xl" />{" "}
              <strong>Address:</strong> {job.contact_information.address}
            </h4>
          </div>
          <button className="btn px-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};
export default JobDetails;
