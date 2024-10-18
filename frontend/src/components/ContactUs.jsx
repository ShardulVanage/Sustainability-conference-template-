import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://icsift.onrender.com/api/contact",
        formData
      );
      setSubmitStatus("success");
      setFormData({
        name: "",
        number: "",
        email: "",
        country: "",
        message: "",
      });
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section
      id="form"
      className="space-y-10 divide-y divide-gray-900/10 flex  justify-center items-center py-12 bg-green-100"
    >
      <div className="flex flex-col justify-center ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3  max-w-7xl">
          <div className="px-4 sm:px-0">
            <h2 className="text-5xl font-bold leading-7 text-green-900 py-3">
              Contact us
            </h2>
            <p className="mt-1 text-base leading-6 text-gray-700 font-PTSerif">
              Get in touch with our team for personalized assistance and expert
              guidance.
            </p>
            <img
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727759980/pcqsaojvmwvbur5l38b3.png"
              alt="Product screenshot"
              className="relative  ring-white/10 lg:row-span-4  lg:max-w-none p-8"
              width={400}
              height={400}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 py-1.5 px-2 block w-full rounded-md drop-shadow-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone / Whatsapp.no
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full py-1.5 px-2 rounded-md drop-shadow-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full py-1.5 px-2 rounded-md drop-shadow-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:sm:col-span-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md py-1.5 px-2 drop-shadow-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <label
                    htmlFor="Message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md py-1.5 px-2 drop-shadow-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                </div>
                {/* <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div> */}
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center"
              >
                Submit
              </button>
            </div>
            {/* {submitStatus === "success" && (
              <p className="mt-4 text-green-600">
                Your message has been sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-600">
                There was an error sending your message. Please try again.
              </p>
            )} */}
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
