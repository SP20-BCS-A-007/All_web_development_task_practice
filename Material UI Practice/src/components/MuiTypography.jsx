import React from 'react'
import {Box, Typography} from "@mui/material"
import { MuiButton } from './MuiButton'

export const MuiTypography = () => {
  return (
   
        <Box>
        <Typography variant='h1'> Hello </Typography>
        <Typography variant='h2' gutterBottom> Hello </Typography>
        <Typography variant='h3'> Hello </Typography>
        <Typography variant='h4'> Hello </Typography>
        <Typography variant='h5'> Hello </Typography>
        <Typography variant='h6'> Hello </Typography>
        <Typography variant='subtitle1'>HEllo</Typography>
        <Typography variant='caption'>HEllo</Typography>
        <MuiButton></MuiButton>
        </Box>
        

  )
}
