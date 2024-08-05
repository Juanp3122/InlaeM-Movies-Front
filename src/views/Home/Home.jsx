import React from 'react';
import { Card, CardMedia, CardContent, Typography, LinearProgress, IconButton, Box } from '@mui/material';

import Favorite from '@mui/icons-material/Favorite';
import Bookmark from '@mui/icons-material/Bookmark';
import Share from '@mui/icons-material/Share';
import HomeCarousel from './HomeCarousel';
import SummaryCard from './SummaryCard';




const Home = () => {
    return (
        <>
            <HomeCarousel></HomeCarousel>
            <SummaryCard img={"https://media.themoviedb.org/t/p/w220_and_h330_face/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg"} title={'Shrek 5'} date={'August 1, 2024'} percentage={75}></SummaryCard>
        </>
    )
}



export default Home