import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <>
      <div className="card bg-base-100 shadow-xl p-10">
        <figure>
          <img src={logo} alt={job_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title} </h2>
          <p>{company_name}</p>
          <div className="flex gap-5 my-4">
            <button className="btn px-8 border border-[#7E90FE] text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="btn px-8 border border-[#7E90FE] text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-5 my-4">
            <h4 className="flex items-center gap-2">
              <SlLocationPin /> {location}{" "}
            </h4>
            <h4 className="flex items-center gap-2">
              <AiOutlineDollarCircle /> {salary}{" "}
            </h4>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn px-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Job;
