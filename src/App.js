// // import logo from './logo.svg';
// // import './App.css';
// // import React, { useState,useRef } from 'react';
// // import Webcam from 'react-webcam';

// // // const App = () => {
// // //   // State to manage captured faces
// // //   const [capturedFaces, setCapturedFaces] = useState([]);

// // //   // Function to handle the add button click
// // //   const handleAddClick = () => {
// // //     // Perform logic to add a face (You can use a library like face-api.js for face recognition)
// // //     // For now, let's just simulate adding a face with a random ID
// // //     const newFace = { id: Math.random().toString(), name: `Face ${capturedFaces.length + 1}` };
// // //     setCapturedFaces([...capturedFaces, newFace]);
// // //   };

// // //   // Function to handle the delete button click
// // //   const handleDeleteClick = (id) => {
// // //     // Filter out the face with the specified ID
// // //     const updatedFaces = capturedFaces.filter((face) => face.id !== id);
// // //     setCapturedFaces(updatedFaces);
// // //   };

// // //   // Function to handle the capture button click
// // //   const handleCaptureClick = () => {
// // //     // Perform logic to capture a face (You can use a library like face-api.js for face recognition)
// // //     // For now, let's just log a message to the console
// // //     console.log('Capturing face...');
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Face Attendance System</h1>
// // //       <button onClick={handleAddClick}>Add</button>
// // //       <button onClick={handleDeleteClick}>Delete</button>
// // //       <button onClick={handleCaptureClick}>Capture</button>

// // //       <div>
// // //         <h2>Captured Faces</h2>
// // //         <ul>
// // //           {capturedFaces.map((face) => (
// // //             <li key={face.id}>
// // //               {face.name}{' '}
// // //               <button onClick={() => handleDeleteClick(face.id)}>Delete</button>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // const App = () => {
// //   const webcamRef = useRef(null);
// //   const [capturedFaces, setCapturedFaces] = useState([]);
// //   const [isWebcamOpen, setIsWebcamOpen] = useState(false);

// //   const handleAddClick = () => {
// //     const newFace = { id: Math.random().toString(), name: `Face ${capturedFaces.length + 1}` };
// //     setCapturedFaces([...capturedFaces, newFace]);
// //   };

// //   const handleDeleteClick = (id) => {
// //     const updatedFaces = capturedFaces.filter((face) => face.id !== id);
// //     setCapturedFaces(updatedFaces);
// //   };

// //   const handleCaptureClick = async () => {
// //     setIsWebcamOpen(true);
// //   };

// //   const handleWebcamClose = () => {
// //     setIsWebcamOpen(false);
// //   };

// //   return (
// //     <div>
      
// //       <style>
// //         {`
// //           body {
// //             background-color: coral;
// //             margin: 0;
// //             padding: 0;
// //           }
// //         `}
// //       </style>
// //       <h1>Face Attendance System</h1>
// //       <button onClick={handleAddClick}>Add</button>
// //       <button onClick={handleDeleteClick}>Delete</button>
// //       <button onClick={handleCaptureClick}>Capture</button>

// //       <div>
// //         <h2>Captured Faces</h2>
// //         <ul>
// //           {capturedFaces.map((face) => (
// //             <li key={face.id}>
// //               {face.name}{' '}
// //               <button onClick={() => handleDeleteClick(face.id)}>Delete</button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Webcam component */}
// //       {isWebcamOpen && (
// //         <div>
// //           <Webcam
// //             audio={false}
// //             ref={webcamRef}
// //             screenshotFormat="image/jpeg"
// //             width={640}
// //             height={480}
// //           />
// //           <button onClick={handleWebcamClose}>Close Webcam</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';

// const App = () => {
//   const webcamRef = useRef(null);
//   const [capturedFaces, setCapturedFaces] = useState([]);
//   const [isWebcamOpen, setIsWebcamOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//   });

//   const handleAddClick = () => {
//     // Open the webcam when adding a new face
//     setIsWebcamOpen(true);
//   };

//   const handleWebcamClose = () => {
//     // Close the webcam when finished capturing
//     setIsWebcamOpen(false);
    
//     // Add the captured face to the list
//     const newFace = {
//       id: Math.random().toString(),
//       name: `${formData.firstName} ${formData.lastName}`,
//       age: formData.age,
//     };
//     setCapturedFaces([...capturedFaces, newFace]);

//     // Clear the form data
//     setFormData({ firstName: '', lastName: '', age: '' });
//   };

//   const handleInputChange = (e) => {
//     // Update the form data when input fields change
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <style>
//         {`
//           body {
//             background-color: coral;
//             margin: 0;
//             padding: 0;
//             font-family: Arial, sans-serif;
//           }
//         `}
//       </style>
//       <h1>Face Attendance System</h1>
//       <button onClick={handleAddClick}>Add</button>

//       <div>
//         <h2>Captured Faces</h2>
//         <ul>
//           {capturedFaces.map((face) => (
//             <li key={face.id}>
//               {face.name}, Age: {face.age}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Webcam component */}
//       {isWebcamOpen && (
//         <div>
//           <form>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Age:
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </form>

//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             width={640}
//             height={480}
//           />
//           <button onClick={handleWebcamClose}>Capture and Submit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [capturedFaces, setCapturedFaces] = useState([]);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });
  const [capturedImage, setCapturedImage] = useState(null); // New state variable for the captured image

  const API_ENDPOINT = 'your-api-gateway-endpoint'; // Replace with your API Gateway endpoint

  const handleAddClick = () => {
    // Open the webcam when adding a new face
    setIsWebcamOpen(true);
  };

  const handleWebcamClose = async () => {
    // Close the webcam when finished capturing
    setIsWebcamOpen(false);

    // Capture the image as base64
    const imageSrc = webcamRef.current.getScreenshot();
    
    // Update the state to store the captured image
    setCapturedImage(imageSrc);

    // Submit the captured image and user details to the Lambda function
    try {
      const response = await fetch(`${API_ENDPOINT}/your-resource-name`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageSrc,
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
        }),
      });

      if (response.ok) {
        console.log('Image and user details submitted successfully!');
        // Add the captured face to the list
        const newFace = {
          id: Math.random().toString(),
          name: `${formData.firstName} ${formData.lastName}`,
          age: formData.age,
        };
        setCapturedFaces([...capturedFaces, newFace]);
        // Clear the form data
        setFormData({ firstName: '', lastName: '', age: '' });
      } else {
        console.error('Failed to submit image and user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting image and user details:', error);
    }
  };

  const handleInputChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <style>
        {`
          body {
            background-color: coral;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
        `}
      </style>
      <h1>Face Attendance System</h1>
      <button onClick={handleAddClick}>Add</button>

      <div>
        <h2>Captured Faces</h2>
        <ul>
          {capturedFaces.map((face) => (
            <li key={face.id}>
              {face.name}, Age: {face.age}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the captured image */}
      {capturedImage && (
        <div>
          <h2>Captured Image</h2>
          <img src={capturedImage} alt="Captured Face" />
        </div>
      )}

      {/* Webcam component */}
      {isWebcamOpen && (
        <div>
          <form>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
          </form>

          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={640}
            height={480}
          />
          <button onClick={handleWebcamClose}>Capture and Submit</button>
        </div>
      )}
    </div>
  );
};

export default App;


