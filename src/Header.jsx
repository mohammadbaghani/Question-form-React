import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Face6Icon from '@mui/icons-material/Face6';
const pages = ['فرم ساز', 'Pricing', 'Blog'];
const settings = ['فرم ساز', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    
        setAnchorElNav(null);
    };

    const hesabdari = () => {
        props.steptow()
    };

    const sabtenam = () => {

        props.stepone()
    };

    return (
        <AppBar position="static" className='appbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, flexDirection: 'row-reverse' }}>
                    <Face6Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >

                    </Typography>





                    <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: { xs: 'none', md: 'flex' } }}>
                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >

                            {props.my ? props.my : "حساب کاربری"}
                        </Button>
                        <Button

                          
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
       فرم ساز آنلاین
                        </Button>
                        <Button

                      
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >

                  
                   پشتیبانی

                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
