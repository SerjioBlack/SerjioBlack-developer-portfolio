import React from 'react';
import CertificatesBlock from "./CertificatesBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Certificates({innerRef}) {
    return (
        <Box id={'certificates'} ref={innerRef} p={2}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.certificates.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <CertificatesBlock image={project.image} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};