import React, { useState } from "react";
import adminAxios from "../../../Axios/adminAxios";
import { useSelector } from "react-redux";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const token = useSelector((state) => state.AdminAuth.Token);

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("image", file);

    try {
      const response = await adminAxios.post("/addCategory", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      setCategoryName("");
      setFile(null);
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <p onClick={toggleModal} className="block text-white px-10" type="button">
        Add Category
      </p>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add Category
            </h3>
            <form onSubmit={handleForm}>
              <div>
                <label
                  htmlFor="categoryName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  value={categoryName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Category name"
                  required
                />

                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  accept="image/*"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCategory;
