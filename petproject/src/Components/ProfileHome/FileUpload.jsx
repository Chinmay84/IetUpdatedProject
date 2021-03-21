import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';


function FileUpload() {
    const formData=new FormData();
    const email = useSelector(state => state.email)
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile,setuploadedFile]=useState({});
    const onChangeHandler =async(e)=>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        try{
            const res = await axios.post('http://localhost:8080/api/unauthuser/createpost',formData);
            const {fileName,filePath}=res.data;
            setuploadedFile({filename,filePath})
                    
        }catch(error){
            console.log(error.response.message);
        }
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        
        formData.append('file',file);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <div className='custom-file mb4'>
                    <input type='file' className='custom-file-label' id='customFile'
                    onChange={onChangeHandler}
                    />
                    <label className='custom-file-label' htmlFor="customFile">
                        {filename}
                    </label>
                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>

        /*<div className='container mt-4'>
            <h4 className='display-4 text-center mb-4'>
                <i className='fab fa-react'/> React File Upload
            </h4>

        </div> */
    )
}

export default FileUpload
