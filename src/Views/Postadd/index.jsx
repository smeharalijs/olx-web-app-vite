import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Ads } from '../../Config/firebase'
import { useNavigate } from 'react-router-dom';



function PostAdd() {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [rs, setRs] = useState()
    const [title, setTitle] = useState()
    const [brand, setBrand] = useState()
    const [category, setCategory] = useState()
    const [discription, setDescription] = useState()
    const [image, setImage] = useState()

    const posted = async (event) => {
        try {
            await Ads({ name, rs, title, brand, category, discription, image })
            navigate("/")
        } catch (error) {
            console.log(error);
        }

    }
    return (

        <React.Fragment>
            <h2 style={{ textAlign: 'center' }}>Post your ads </h2>
            <div className='d-flex justify-content-center'>
                <form className='p-5 ' >
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>

                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Enter Your Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth
                            required
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Enter product price"
                            onChange={e => setRs(e.target.value)}
                            value={rs}
                            fullWidth
                            required
                        />

                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Enter product title"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Enter product brand"
                            onChange={e => setBrand(e.target.value)}
                            value={brand}
                            fullWidth
                            required
                        />

                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Enter product category"
                            onChange={e => setCategory(e.target.value)}
                            value={category}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Enter product discription"
                            onChange={e => setDescription(e.target.value)}
                            value={discription}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="file"
                            variant='outlined'
                            color='secondary'
                            onChange={e => setImage(e.target.files[0])}
                            fullWidth
                            required
                        />
                    </Stack>


                    <Button onClick={posted} variant="outlined" color="secondary">Post</Button>
                </form>

            </div>

        </React.Fragment>
    )
}

export default PostAdd;