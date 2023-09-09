import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import proAxios from '../../../Axios/proAxios';
import { useSelector } from "react-redux";


const Question = ({user}) => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState("");
  const [allCategory, setAllCAtegory] = useState([]);

  const token = useSelector((state)=>state.proAuth.Token)


  useEffect(() => {
    proAxios.get("/getCategory").then((res) => {
      const getCategory = res.data.category;
      console.log(getCategory, "lll++==");
      setAllCAtegory(getCategory);
    });
  }, []);

  const handleDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const handleUpload = async (event) => {
    event.preventDefault(); 
  
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('image', file);
      });
      formData.append('message', message);

      formData.append('category', category);

  
      formData.append('userId', user._id);
  
      const response = await proAxios.post('/quesionUpload', formData,{
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Images uploaded successfully:', response.data);
      setCategory('')
      setMessage('')
      setFiles([])
      setFiles([]);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md mt-20">
      <form method='POST' onSubmit={handleUpload}>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple>
  {({ getRootProps, getInputProps, isDragActive }) => (
    <div
      {...getRootProps()}
      className={`p-4 border border-dashed ${
        isDragActive ? 'border-blue-400' : 'border-gray-300'
      } bg-gray-50 rounded-lg cursor-pointer`}
    >
      <input {...getInputProps()} />
      {files.length > 0 && (
        <div className="flex flex-wrap -m-2">
          {files.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Selected ${index}`}
              className="w-16 h-16 object-cover m-2 rounded-lg border"
            />
          ))}
        </div>
      )}
      {!isDragActive && files.length === 0 && (
        <div className="text-center">
          <p>Drag 'n' drop images here, or click to select</p>
          <div className="w-full flex justify-center items-center mt-4">
            <img
              className="h-20 max-w-20"
              src="/images/image.png"
              alt="image description"
            />
          </div>
        </div>
      )}
    </div>
  )}
</Dropzone>


        <label
          htmlFor="message"
          className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name='message'
          type='message'
          onChange={(e) => { setMessage(e.target.value) }}
          value={message}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>




        
<div className="flex items-center border-2 py-2 px-3 mt-2 rounded-2xl">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 10h16M4 14h16M4 18h16"
    />
  </svg>
  <select
    className="pl-2 outline-none border-none text-sm md:text-base text-gray-400 "
    id="category"
    name="category"
    onChange={(e) => setCategory(e.target.value)}
    value={category}
  >
    <option >
      add category
    </option>
    {allCategory.map((item) => (
      <option key={item.categoryName} value={item.categoryName}>
        {item.categoryName}
      </option>
    ))}
  </select>
</div>


        <button
          type='submit'
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        //   disabled={files.length === 0}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Question;
