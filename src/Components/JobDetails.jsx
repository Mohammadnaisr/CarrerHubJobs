import useJobs from '../Hooks/useJobs';

import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { company_name } = useParams();
  const { Job, error } = useJobs();
  if (error) {
    return <p> loading....</p>;
  }

  let filterData = job.filter(jobs => jobs.company_name === company_Name);
  console.log(filterData);

  return (
    <>
      <h1>Jobs:{company_name}</h1>
    </>
  );
};
export default JobDetails;
