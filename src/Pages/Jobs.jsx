import { useState } from 'react';

import JobsCard from '../Components/JobsCard';

import useJobs from '../Hooks/useJobs';

const Jobs = () => {
  const [view, setView] = useState(false);
  const [Jobs] = useJobs();
  // const JobsCard = view ? jobs : jobs.slice(0, 4);

  return (
    <>
      <main className=" flex flex-col justify-center items-center  overflow-hidden gap-10 px-[2%] md:py-[5%] py-6">
        <section className="flex flex-col gap-6 justify-center items-center flex-wrap">
          <h2 className="text-4xl capitalize c font-semibold">Featured Jobs</h2>
          <p className="font-semibold text-lg text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </section>
        <section className="w-full">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 ">
            {Jobs.map(el => (
              <JobsCard key={el.id} value={el} />
            ))}
          </div>

          <div className="px-[2%]">
            {view ? (
              <button
                onClick={() => setView(!view)}
                className="capitalize bg-accent text-button px-5 py-2 font-bold rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit"
              >
                see less
              </button>
            ) : (
              <button
                onClick={() => setView(!view)}
                className="capitalize bg-accent text-button px-5 py-2  font-bold  rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit"
              >
                {' '}
                see all jobs
              </button>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Jobs;
