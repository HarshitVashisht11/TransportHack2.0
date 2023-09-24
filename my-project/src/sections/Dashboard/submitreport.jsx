import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db } from '../firebase';

function SubmitReport() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [values, setValues] = useState({
    title: "",
    description: "",
    videoFile: null,
    location: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.title || !values.description || !values.videoFile || !values.location) {
      setErrorMsg("Fill in all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    try {
      // Upload video to Firebase Storage and get the download URL
      const videoRef = ""/* Upload video and get reference */;

      // Create a report object with the form data and video URL
      const report = {
        title: values.title,
        description: values.description,
        videoURL: videoRef,
        location: values.location,
      };

      // Store the report in Firebase Firestore
      await db.collection("reports").add(report);

      setSubmitButtonDisabled(false);
      navigate("/Dashboard");
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-cyan-500 to-cyan-800 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Submit a Report</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmission(); }}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              type="text"
              id="title"
              name="title"
              placeholder="Report title"
              required
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              id="description"
              name="description"
              placeholder="Description"
              required
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="videoFile">
              Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setValues({ ...values, videoFile: e.target.files[0] })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-cyan-300 focus:outline-none"
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              required
              value={values.location}
              onChange={(e) => setValues({ ...values, location: e.target.value })}
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-md hover:from-cyan-600 hover:to-cyan-800 focus:outline-none"
            type="submit"
            disabled={submitButtonDisabled}
          >
            Submit
          </button>
        </form>
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        <p className="mt-4 text-center">
          <Link to="/Dashboard" classQName="text-cyan-600">Back to Dashboard</Link>
        </p>
      </div>
    </div>
  );
}

export default SubmitReport;
