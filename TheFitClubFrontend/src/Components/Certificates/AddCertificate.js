import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCertificate =()=>{


    const [name, setName] = useState('');
    const [certificateImage, setCertificateImage] = useState(null);
    const tr_id = sessionStorage.getItem('trainer_id');
    const Navigate= useNavigate();
    const handleImageUpload = (e) => {
        setCertificateImage(e.target.files[0]);
    };

    const handleCreate = async() => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('certificate_img', certificateImage);
        formData.append('trainer_id', tr_id);

        axios.post(`http://localhost:8080/trainer/certificate`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response.data);
                const tr=sessionStorage.getItem('trainer')
                Navigate(`/TrainerDB/${tr}`)

            })
            .catch((error) => {
                // Handle errors
            });
    };

    

    return (
        <div>
            NAME OF CERTIFICATE: <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

            CERTIFICATE IMAGE: <input type="file" onChange={handleImageUpload} />
            <button onClick={handleCreate}> ADD CERTIFICATE</button>
        </div>
    );
}

export default AddCertificate;