import { Box, Card, CardContent, CardMedia, CircularProgress, IconButton, Typography } from "@mui/material"
import './home.css'
import Favorite from '@mui/icons-material/Favorite';
import Bookmark from '@mui/icons-material/Bookmark';
function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress  size="30px" variant="determinate" {...props} sx={{ color: '#4DA14F' }} />
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
            >
                <Typography variant="caption" component="div" fontSize="28px" sx={{ fontFamily: 'Inter', fontWeight: '400', lineHeight: '10px', fontSize: '9px', textAlign: 'center' }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}



const SummaryCard = (props) => {
    const { img, title, date, percentage } = props



    return (
        <Card sx={{ width: '200px',
            height: '335px',
            top: '574px',
            left: '284px',
            gap: '12px',
            borderRadius: '8px',
            opacity: '0px',
            backgroundColor: '#262626'
        }}  >
            <CardMedia
            sx={{ width: '200px',
                height: '223px',
                gap: '0px',
                borderRadius: '8px 8px 0px 0px',
                opacity: '0px',
                boxShadow: '0px 1px 8px 0px #00000014',
                boxShadow: '0px 0px 10px 0px #00000014'}}
                className="summary-card-img"
                component="img"
                image={img}
                title={title}

            />
            <CardContent sx={{paddingTop:'5px'}}>
                <Box  >
                    <Typography mb={'10px'} sx={{
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: '20px',
                        textAlign: 'left'
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: '9px',
                        fontWeight: '400',
                        lineHeight: '10px',
                        textAlign: 'left',


                    }}>
                        {date}
                    </Typography>

                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'grid', justifyContent: 'space-between', alignItems: 'center', p: 1, gap: '10px' }}>

                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '9px',
                                fontWeight: '400',
                                lineHeight: '10px',
                                textAlign: 'center'
                            }}>
                                Rating
                            </Typography>
                            <CircularProgressWithLabel value={percentage} />
                        </Box>
                        <Box sx={{ display: 'grid', justifyContent: 'space-between', alignItems: 'center', p: 1, gap: '10px' }}>

                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '9px',
                                fontWeight: '400',
                                lineHeight: '10px',
                                textAlign: 'center'
                            }}>
                                Favorites
                            </Typography>
                            <IconButton aria-label="favorite" sx={{ color: 'white' }}>
                                <Favorite />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'grid', justifyContent: 'space-between', alignItems: 'center', p: 1, gap: '10px' }}>

                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '9px',
                                fontWeight: '400',
                                lineHeight: '10px',
                                textAlign: 'center'
                            }}>
                                Save
                            </Typography>
                            <IconButton aria-label="favorite" sx={{ color: 'white' }}>
                                <Bookmark />
                            </IconButton>
                        </Box>
                    </Box>

                </Box>
            </CardContent>


        </Card>
    )
}

export default SummaryCard