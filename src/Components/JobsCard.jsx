import { ImLocation2 } from 'react-icons/im';
import Jobs from '../Pages/Jobs';

import { HiCurrencyDollar } from 'react-icons/hi';
// import { ImLocation2 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import JobDetails from './JobDetails';
const JobsCard = ({ value }) => {
  const {
    company_name,
    image_link,
    job_address,
    job_title,
    job_type,
    salary_range,
  } = value;

  return (
    <>
      <section className="cursor-pointer rounded-lg px-[10%] py-[7%] md:py-[5%] flex flex-col justify-center items-start gap-3 ">
        <div className="card card-compact bg-purple-950 w-96 shadow-xl mx-5 my-10 text-white ">
          <figure>
            <div className="  flex flex-col items-center m-4">
              <img src={image_link} alt={company_name} className="w-40 " />
              <h2 className=" my-10 font-bold text-2xl capitalize ">
                {job_title}
              </h2>
            </div>
          </figure>
          <div className="card-body w-full h-full">
            <h2 className="card-title">{}</h2>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-secondary">Remote</button>
              <button className="btn btn-outline btn-warning">Full Time</button>
            </div>
            <div className="flex flex-col gap-4 mt-5 justify-center items-start">
              <div className="flex  gap-2 justify-center text-center"></div>
              <div className="flex  gap-2 justify-center text-center">
                <ImLocation2 className="text-xl " />
                <h3 className="font-medium">{job_address} </h3>
              </div>
              <div className="flex gap-2 justify-center text-center">
                <HiCurrencyDollar className="text-xl" />
                <h3 className="font-medium">{salary_range}</h3>
              </div>
            </div>

            <div className="card-actions justify-center">
              <NavLink to={`/Jobs/${company_name}`}>
                <button className="btn btn-white btn-accent btn-outline">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobsCard;
