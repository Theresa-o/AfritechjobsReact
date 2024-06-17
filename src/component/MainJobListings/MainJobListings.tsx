import ReactIcon from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

const MainJobListings = () => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate("/joblisting");
  };
  return (
    <section>
      <div>
        <div>
          <div className="job-listings-container">
            <div
              className="job-listing gray mx-auto px-5 items-center justify-center m-4 md:w-5/6 "
              onClick={handleJobClick}
            >
              <div className="listing h-30 w-full rounded-md ">
                <div className="border-2 border-gray-500 p-2 h-full w-full flex items-center">
                  <a href="#" className="w-full flex items-center">
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
                          job.title
                        </h2>
                        <p className="text-gray-600 flex">Location</p>
                      </div>
                      <div className="job-meta flex justify-between align-center w-full">
                        <p className="text-gray-600">Company Name</p>
                        <p className="text-gray-600">Job Contract</p>
                      </div>

                      <div className="job-meta flex justify-between align-center whitespace-nowrap w-full">
                        <p className="text-gray-600">Keywords</p>
                        <span className="text-sm text-gray-600">
                          Posted: 10 Sept
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="job-listing gray mx-auto px-5 items-center justify-center m-4 md:w-5/6 ">
              {/* job-listing gradient mx-auto flex w-5/6 px-5 items-center justify-center m-5 */}
              {/*   */}
              <div className="listing h-30 w-full rounded-md ">
                <div className="border-2 border-gray-500 p-2 h-full w-full flex items-center">
                  <a href="#" className="w-full flex items-center">
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
                          Job Title
                        </h2>
                        <p className="text-gray-600 flex">Location</p>
                      </div>
                      <div className="job-meta flex justify-between align-center w-full">
                        <p className="text-gray-600">Company Name</p>
                        <p className="text-gray-600">Job Contract</p>
                      </div>

                      <div className="job-meta flex justify-between align-center whitespace-nowrap w-full">
                        <p className="text-gray-600">Keywords</p>
                        <span className="text-sm text-gray-600">
                          Posted: 10 Sept
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainJobListings;
