import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-500min w-full min-h-screen m-0 p-0 bg-cover bg-no-repeat bg-fixed bg-cover bg-center flex items-center justify-center">
        <div className="px-[130px] py-20 ">
          <div className="w-[450px] rounded-2xl bg-gradient-to-r from-orange-400 to-indigo-600">
            <div className="p-3 text-center">
              <h2 className="text-3xl font-semibold text-orange-700">
                Contact Us
              </h2>
            </div>

            <div className="pl-[45px]">
              <div className="pb-2">
                <div className="mb-3">
                  <input
                    className="w-[90%] rounded-md border border-gray-300 px-3 py-2 "
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-2">
                  <input
                    className="w-[90%] rounded-md border border-gray-300 px-3 py-2"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="pb-3">
                <div className="mb-3">
                  <input
                    className="w-[90%] rounded-md border border-gray-300 px-3 py-2"
                    type="number"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-3">
                  <input
                    className="w-[90%] rounded-md border border-gray-300 px-3 py-2"
                    type="text"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <textarea
                    className="h-[90px] w-[90%] rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pb-3 pt-4 text-center">
              <button className="h-10 w-[76%] rounded-md border-0 bg-orange-700 text-white ">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
