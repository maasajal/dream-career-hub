const Banner = () => {
  return (
    <>
      <div className="py-8">
        <div className="flex-col lg:flex-row flex items-center justify-between">
          <div className="flex-1 max-w-lg">
            <h1 className="text-7xl font-extrabold">
              One Step Closer To Your{" "}
              <span className=" text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn px-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
              Get Started
            </button>
          </div>
          <img src="./images/user.png" className="max-w-md rounded-lg flex-1" />
        </div>
      </div>
    </>
  );
};
export default Banner;
