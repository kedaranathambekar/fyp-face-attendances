import logo from './logo.svg';
import './App.css';
import React, { useState,useRef } from 'react';
import Webcam from 'react-webcam';

// const App = () => {
//   // State to manage captured faces
//   const [capturedFaces, setCapturedFaces] = useState([]);

//   // Function to handle the add button click
//   const handleAddClick = () => {
//     // Perform logic to add a face (You can use a library like face-api.js for face recognition)
//     // For now, let's just simulate adding a face with a random ID
//     const newFace = { id: Math.random().toString(), name: `Face ${capturedFaces.length + 1}` };
//     setCapturedFaces([...capturedFaces, newFace]);
//   };

//   // Function to handle the delete button click
//   const handleDeleteClick = (id) => {
//     // Filter out the face with the specified ID
//     const updatedFaces = capturedFaces.filter((face) => face.id !== id);
//     setCapturedFaces(updatedFaces);
//   };

//   // Function to handle the capture button click
//   const handleCaptureClick = () => {
//     // Perform logic to capture a face (You can use a library like face-api.js for face recognition)
//     // For now, let's just log a message to the console
//     console.log('Capturing face...');
//   };

//   return (
//     <div>
//       <h1>Face Attendance System</h1>
//       <button onClick={handleAddClick}>Add</button>
//       <button onClick={handleDeleteClick}>Delete</button>
//       <button onClick={handleCaptureClick}>Capture</button>

//       <div>
//         <h2>Captured Faces</h2>
//         <ul>
//           {capturedFaces.map((face) => (
//             <li key={face.id}>
//               {face.name}{' '}
//               <button onClick={() => handleDeleteClick(face.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

const App = () => {
  const webcamRef = useRef(null);
  const [capturedFaces, setCapturedFaces] = useState([]);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);

  const handleAddClick = () => {
    const newFace = { id: Math.random().toString(), name: `Face ${capturedFaces.length + 1}` };
    setCapturedFaces([...capturedFaces, newFace]);
  };

  const handleDeleteClick = (id) => {
    const updatedFaces = capturedFaces.filter((face) => face.id !== id);
    setCapturedFaces(updatedFaces);
  };

  const handleCaptureClick = async () => {
    setIsWebcamOpen(true);
  };

  const handleWebcamClose = () => {
    setIsWebcamOpen(false);
  };

  return (
    <div>
      
      <style>
        {`
          body {
            background-color: coral;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <h1>Face Attendance System</h1>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleCaptureClick}>Capture</button>

      <div>
        <h2>Captured Faces</h2>
        <ul>
          {capturedFaces.map((face) => (
            <li key={face.id}>
              {face.name}{' '}
              <button onClick={() => handleDeleteClick(face.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Webcam component */}
      {isWebcamOpen && (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={640}
            height={480}
          />
          <button onClick={handleWebcamClose}>Close Webcam</button>
        </div>
      )}
    </div>
  );
};

export default App;
