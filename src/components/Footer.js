import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center', fontSize : {lg:'44px',xs:'35px'} }} flexWrap="wrap" px="40px" pt="24px" fontWeight={500} fontSize="40px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
      Universal GYM
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Durgesh Meshram</Typography>
  </Box>
);

export default Footer;