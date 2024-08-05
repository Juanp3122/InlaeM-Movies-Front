import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import rectangle1 from '../../assets/Rectangle 1.png'
import rectangle2 from '../../assets/Rectangle 2.png'
import sunIcon from '../../assets/light-mode.png'
import exitIcon from '../../assets/exit.png'
import './navBar.css'
const NavBar = () => {
    const pages = ['Popular', 'Now Playing', 'Upcoming', 'TopRated', 'Favorites', 'Saved'];
    return (

        <AppBar position="static" sx={{ bgcolor: "black", width: '100%' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ marginLeft: '60px', marginRight: '30px' }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                size: '25px',
                                color: 'inherit',
                                fontSize: '25px',
                                lineHeight: '28px',
                                letterSpacing: '0.15em',
                                textAlign: 'center'

                            }}
                        >
                            INLAZE
                        </Typography>
                        <Box className="logoContainer">
                            <img src={rectangle1} className="rectangle1"></img>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{

                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    size: '25px',
                                    color: 'inherit',
                                    fontSize: '12px',
                                    lineHeight: '13px',
                                    letterSpacing: '0.15em',
                                    textAlign: 'center',
                                    margin: '2px',
                                    color: '#F0B90B'
                                }}
                            >
                                MOVIES
                            </Typography>
                            <img src={rectangle2} className="rectangle2"></img>
                        </Box>

                    </Box>
                    <Box sx={{ flexGrow: 1, gap: '50px', display: { xs: 'none', md: 'flex' } }}>
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
                    <Box >
                        <img src={sunIcon} className="sun-img"></img>
                        <img src={exitIcon} className="sun-img"></img>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )

}

export default NavBar