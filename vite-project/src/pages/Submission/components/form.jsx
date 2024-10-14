import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  // template_tky806n
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(form.current);
    const templateParams = Object.fromEntries(formData);

    // Add radio button value
    templateParams.Paper_Type =
      document.querySelector('input[name="Paper_Type"]:checked')?.value || "";

    // Get the file
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    if (file) {
      templateParams.uploaded_paper_name = file.name;

      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        templateParams.uploaded_paper = reader.result;
        sendEmail(templateParams);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
        setStatus("Failed to process file. Please try again.");
      };
    } else {
      sendEmail(templateParams);
    }
  };

  const sendEmail = (templateParams) => {
    emailjs
      .send(
        "service_k0vmj0o",
        "template_tky806n",
        templateParams,
        "6Go2235EEKikAwNMK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Form submitted successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to submit form. Please try again.");
        }
      );
  };

  return (
    <section
      id="form"
      className="space-y-10 divide-y divide-gray-900/10 flex  justify-center items-center py-12 bg-green-50"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3  max-w-7xl">
        <div className="px-4 sm:px-0">
          <h2 className="text-3xl sm:text-5xl font-bold leading-7 text-green-900 Contact us">
            Paper Submission
          </h2>
          <p className="mt-1 text-base leading-6 text-gray-600 font-PTSerif">
            Get in touch with our team for personalized assistance and expert
            guidance.
          </p>
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727930452/bl1lrhkzxzypsjwtswot.png"
            alt="Product screenshot"
            className="relative  rounded-xl  ring-1 ring-white/10 lg:row-span-4  lg:max-w-none"
            width={400}
            height={400}
          />
        </div>

        <form
          ref={form}
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
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    type="Text"
                    name="Number"
                    id="Number"
                    autoComplete="Number"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-3">
                <label
                  htmlFor="Author_Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Author Name
                </label>
                <div className="mt-2">
                  <input
                    id="Author_Name"
                    name="Author_Name"
                    type="text"
                    autoComplete="Author_Name"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-4">
                <label
                  htmlFor="Co_Author_Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Co-Author Name
                </label>
                <div className="mt-2">
                  <input
                    id="Co_Author_Name"
                    name="Co_Author_Name"
                    type="text"
                    autoComplete="Co_Author_Name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-4">
                <label
                  htmlFor="Paper_Title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Paper Title
                </label>
                <div className="mt-2">
                  <input
                    id="Paper_Title"
                    name="Paper_Title"
                    type="text"
                    autoComplete="Paper_Title"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br />
              <div className="sm:sm:col-span-3">
                <label
                  htmlFor="Department"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Department
                </label>
                <div className="mt-2">
                  <input
                    id="Department"
                    name="Department"
                    type="text"
                    autoComplete="Department"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:sm:col-span-3">
                <label
                  htmlFor="University_Organization"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  University / Organization
                </label>
                <div className="mt-2">
                  <input
                    id="University_Organization"
                    name="University_Organization"
                    type="text"
                    autoComplete="University_Organization"
                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="uploaded_paper"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Upload your paper
                </label>
                <div className="mt-2">
                  <input
                    id="uploaded_paper"
                    name="uploaded_paper"
                    type="file"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br />
              <div className="sm:sm:col-span-4">
                <label className="text-base font-semibold text-gray-900">
                  Paper Type
                </label>

                <fieldset className="mt-4">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    <div className="flex items-center">
                      <input
                        id="Abstract"
                        name="Abstract"
                        type="radio"
                        className="h-4 w-4 px-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="Abstract"
                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                      >
                        Abstract
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Full_Paper"
                        name="Full_Paper"
                        type="radio"
                        className="h-4 w-4 px-2 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="Full_Paper"
                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full Paper
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <br />
              <div className="sm:sm:col-span-3">
                <label
                  htmlFor="Department"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Presentation Type
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Virtual/Physical - Oral/Poster"
                    id="Department"
                    name="Department"
                    type="text"
                    autoComplete="Department"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
                    id="Message"
                    name="Message"
                    type="text"
                    autoComplete="Message"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400    sm:text-sm sm:leading-6"
                  />
                </div>
                <br />
                <div className="w-1/2">
                  <label
                    htmlFor="conference-source"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    How this conference came to be known to you
                  </label>
                  <div className="mt-2">
                    <select
                      id="conference-source"
                      name="conference-source"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select an option</option>
                      <option value="conference-alerts">
                        Conference Alerts
                      </option>
                      <option value="email">Email</option>
                      <option value="friend-colleague-supervisor">
                        Friend, Colleague or Supervisor
                      </option>
                      <option value="conference-alarm">Conference Alarm</option>
                      <option value="facebook">Facebook</option>
                      <option value="google-search">Google Search</option>
                      <option value="eventbrite">Eventbrite</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <input
              type="submit"
              className="mt-10 block w-1/2 rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              value={"Submit"}
            />
          </div>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}
