import { useEffect, useState } from "react";
import ReactIcon from "../../assets/react.svg";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface JobProp {
  id: number;
  title: string;
  company: string;
  location: string;
  contract: string;
  keywords: string[];
  postedDate: string;
}

const MainJobListings = () => {
  const [jobs, setJobs] = useState<JobProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await fetch("https://teresita.pythonanywhere.com/jobs");
      const data = await res.json();
      // console.log(data);
      setJobs(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section>
      <div>
        <div>
          <div className="job-listings-container">
            {isLoading ? (
              <LoadingSpinner isLoading={isLoading} />
            ) : (
              <>
                {" "}
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="job-listing gray mx-auto px-5 items-center justify-center m-4 md:w-5/6 "
                  >
                    <div className="listing h-30 w-full rounded-md ">
                      <div className="border-2 border-gray-500 p-2 h-full w-full flex items-center">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="w-full flex items-center"
                        >
                          <div className="job-logo bg-gray-200 rounded-full h-20 w-20 hidden md:flex flex-shrink-0 md:m-5">
                            <img
                              src={ReactIcon}
                              alt="Afritech Logo"
                              className="rounded-full h-18"
                            />
                          </div>
                          <div className="job-position-details ml-4 flex-grow m-4 md:m-9">
                            <div className="job-meta flex justify-between align-center w-full">
                              <h2 className="text-xl font-semibold mb-2">
                                {job.title}
                              </h2>
                              <p className="text-gray-600 flex">
                                {job.location}
                              </p>
                            </div>
                            <div className="job-meta flex justify-between align-center w-full">
                              <p className="text-gray-600">{job.company}</p>
                              <p className="text-gray-600">{job.contract}</p>
                            </div>

                            <div className="job-meta flex justify-between align-center whitespace-nowrap w-full">
                              <p className="text-gray-600">
                                {job.keywords.join(", ")}
                              </p>
                              <span className="text-sm text-gray-600">
                                Posted: {job.postedDate}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainJobListings;
