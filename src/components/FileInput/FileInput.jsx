import { useState } from 'react';

const FileInput = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return <>

        <div className="relative w-full outline-none"> {/* Adjust width as needed */}
            <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
                htmlFor="file-input"
                className="block px-4 text-center text-white py-3 bg-green-600 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-500"
            >
                {fileName || 'Choose An Excel file'}
            </label>
        </div>
    </>
};

export default FileInput;
