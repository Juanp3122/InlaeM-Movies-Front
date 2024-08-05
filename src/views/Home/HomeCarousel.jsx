import React from 'react';
import { Card, CardMedia, CardContent, Typography, LinearProgress, IconButton, Box, Button, CircularProgress } from '@mui/material';

import Favorite from '@mui/icons-material/Favorite';
import Bookmark from '@mui/icons-material/Bookmark';
import Share from '@mui/icons-material/Share';
import './home.css'

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size="80px" variant="determinate" {...props} sx={{color: '#4DA14F'}} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                //styleName: INLAZE APP/Desktop-Tablet/Títulos Primarios;


            >
                <Typography variant="caption" component="div" fontSize="28px" sx={{fontFamily: 'IBM Plex Sans',fontWeight:'700',lineHeight:'36px',fontSize:'28px'}}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const HomeCarousel = () => {
    const pages = ['Trama', 'Cast', 'Gallery', 'info'];
    return (
        <Card sx={{ position: 'relative', maxWidth: '100%', color: 'white', bgcolor: '#000', mx: 'auto' }}>
            <CardMedia
                component="img"
                image="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg"
                alt="Kung Fu Panda 4"
                sx={{ height: 300 }}
            ></CardMedia>
            <Box style={{ position: 'absolute', top: '200px', left: '35px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, gap: '30px' }}>
                    <Box sx={{ display: 'inline', justifyContent: 'flex-start', maxWidth:'800px'  }}>       
                        <Typography variant="h4" sx={{fontFamily: 'IBM Plex Sans',fontSize:'35px',fontWeight:'700'}} >
                            Kung Fu Panda 4
                        </Typography>
                        <Typography  sx={{fontFamily: 'IBM Plex Sans',fontSize:'20px',fontWeight:'700',lineHeight:'24px',textAlign:'left'}} >
                        Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🐼✨
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgressWithLabel value={97} />
                    </Box>
                </Box>

            </Box>
            <CardContent sx={{ position: 'relative', bgcolor: 'rgba(0, 0, 0, 0.7)' }}>


            </CardContent>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, gap: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 1, gap: '70px' }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            //  onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block', fontSize: '14px', fontWeight: '600', lineHeight: '14px', textAlign: 'center', fontFamily: 'Inter', textTransform: 'none' }}

                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 1, gap: '30px' }}>
                    <IconButton aria-label="favorite" sx={{ color: 'white' }}>
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="bookmark" sx={{ color: 'white' }}>
                        <Bookmark />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ color: 'white' }}>
                        <Share />
                    </IconButton>

                </Box>
            </Box>
        </Card>
    );
};
export default HomeCarousel