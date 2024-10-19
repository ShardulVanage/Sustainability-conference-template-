import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dwlhesiyi",
  },
});
const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const CLOUDINARY_CLOUD_NAME = "dwlhesiyi";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
    authorName: "",
    coAuthorName: "",
    paperTitle: "",
    department: "",
    universityOrganization: "",
    paperType: "",
    presentationType: "",
    message: "",
    conferenceSource: "",
    pdfUrl: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, number: value });
  };
  const onDrop = (acceptedFiles) => {
    setPdfFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Cloudinary response:", response.data);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let pdfUrl = "";
      if (pdfFile) {
        console.log("Uploading file:", pdfFile);
        pdfUrl = await uploadToCloudinary(pdfFile);
      }

      const dataToSubmit = {
        ...formData,
        pdfUrl: pdfUrl,
      };

      console.log("Submitting data:", dataToSubmit);

      const response = await axios.post(
        "https://icsift.onrender.com/api/paper-submission",
        dataToSubmit
      );
      console.log("Submission response:", response.data);

      setSubmitStatus("success");
      setFormData({
        name: "",
        number: "",
        email: "",
        country: "",
        authorName: "",
        coAuthorName: "",
        paperTitle: "",
        department: "",
        universityOrganization: "",
        paperType: "",
        presentationType: "",
        message: "",
        conferenceSource: "",
        pdfUrl: "",
      });
      setPdfFile(null);

      // Show success toast
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      toast.success("Our coordinator will contact you within 24-48 hours", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Show error toast
      toast.error("Error submitting form. Please try again.", {
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
          onSubmit={handleSubmit}
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:sm:col-span-3">
                <label
                  htmlFor="Author_Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Author Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="authorName"
                    id="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    required
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
                  <PhoneInput
                    country={"us"}
                    value={formData.number}
                    onChange={handlePhoneChange}
                    inputClass="!w-full !py-1.5 !px-2 !rounded-md !border-0 !shadow-sm !ring-1 !ring-inset !ring-gray-300"
                    containerClass="!w-full"
                    required
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    type="text"
                    name="coAuthorName"
                    id="coAuthorName"
                    value={formData.coAuthorName}
                    onChange={handleChange}
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
                    type="text"
                    name="paperTitle"
                    id="paperTitle"
                    value={formData.paperTitle}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    type="text"
                    name="department"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    type="text"
                    name="universityOrganization"
                    id="universityOrganization"
                    value={formData.universityOrganization}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div className="sm:col-span-4">
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
              </div> */}
              <br />
              <div className="sm:col-span-4">
                <label
                  htmlFor="uploaded_paper"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Upload your paper
                </label>
                <div
                  {...getRootProps()}
                  className="dropzone border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer mt-2"
                >
                  <input
                    {...getInputProps()}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {isDragActive ? (
                    <p>Drop the PDF file here ...</p>
                  ) : (
                    <p>Drag 'n' drop a PDF file here, or click to select one</p>
                  )}
                </div>
                {pdfFile && (
                  <p className="mt-2 font-medium">
                    Selected file:{" "}
                    <span className="font-normal underline underline-offset-4">
                      {pdfFile.name}
                    </span>
                  </p>
                )}
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
                        type="radio"
                        name="paperType"
                        value="Abstract"
                        checked={formData.paperType === "Abstract"}
                        onChange={handleChange}
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
                        type="radio"
                        name="paperType"
                        value="Full Paper"
                        checked={formData.paperType === "Full Paper"}
                        onChange={handleChange}
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
                  htmlFor="presentationType"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Presentation Type
                </label>
                <div className="mt-2">
                  <select
                    name="presentationType"
                    id="presentationType"
                    value={formData.presentationType}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option value="Poster">Poster</option>
                    <option value="Oral">Oral</option>
                  </select>
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
                    className="mt-1 block w-full drop-shadow-md rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ></textarea>
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
                      name="conferenceSource"
                      id="conferenceSource"
                      value={formData.conferenceSource}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
          {/* {submitStatus === "success" && (
            <p className="mt-4 text-green-600">Paper submitted successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600">
              Error submitting paper. Please try again.
            </p>
          )} */}
        </form>
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
