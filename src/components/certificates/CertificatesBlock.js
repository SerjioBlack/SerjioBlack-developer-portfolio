import React from 'react';
import {Box} from "@mui/material";

function CertificatesBlock(props) {
   const {image} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} paddingY={2}/>
         
        
      </Box>
   );
}

export default CertificatesBlock;