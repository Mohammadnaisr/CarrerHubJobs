import { useEffect, useState } from 'react';

const useJobs = () => {
  const [error, setError] = useState('');
  const [job, setJobs] = useState([]);

  useEffect(() => {
    const jobData = async () => {
      try {
        const response = await fetch('./Jobs.json');
        if (response.ok === false) {
          throw new Error('opps! page not responding');
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err);
      }
    };
    jobData();
  }, []);

  return [job, error];
};

export default useJobs;
