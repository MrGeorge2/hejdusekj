import React from "react"
import { IBaseProps } from "../base/types"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './layout.scss';
import { Loc } from "../localization/loc";

const pages = [
    {
        href: 'games',
        page: 'games'
    },
    {
        href: 'https://cz.linkedin.com/in/jirihejdusek',
        page: 'linkedin'
    },
    {
        href: 'https://github.com/MrGeorge2/hejdusekj',
        page: 'github'
    },
];

const Header: React.FunctionComponent = (

) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{position: "static"}}>

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ height: "100%", display: { xs: 'none', md: "flex" } }}>
                        <img className="navLogo" src={process.env.PUBLIC_URL + '/logo/logoSmall.svg'} alt="logo"></img>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.page} onClick={handleCloseNavMenu} href={page.href}>
                                    <Typography textAlign="center" >
                                        <Loc locKey={page.page} />
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        <img className="navLogo" src={process.env.PUBLIC_URL + '/logo/logoSmall.svg'} alt="logo"></img>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={page.href}
                            >
                                <Loc locKey={page.page} />
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export const Layout: React.FunctionComponent<IBaseProps> = ({
    children
}) => {
    return (
        <React.Fragment>
            <Header />
            {children}

        </React.Fragment>
    )
}