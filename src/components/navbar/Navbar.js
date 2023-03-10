import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {  Box, Drawer, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CTypography from "../../utility/CTypography";
import Influencers from '../influencers/Influencers'


const navbarData = {
    routes: [
        {
            id: 1,
            name: "EXPLORE",
        }, {
            id: 2,
            name: "TRENDING NFTs",
        },
        {
            id: 3,
            name: "AUCTIONED NFTs",
        },
        {
            id: 4,
            name: "INFLUENCERS",
        },

    ],
    logo: logo,
    logoTitle: "Abdul Kader",
}

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const { routes, logo } = navbarData

    return (
        <Box>
            {/* nav bar here */}

            <Stack
                direction={{
                    lg: "row",
                    xs: "column",
                }}
                display={{
                    xs: "none",
                    md: "flex",
                }}
                alignItems="center"
                justifyContent="space-between"
                px={10}
                py={4}
                spacing={2}
            >
                {/* navbar logo */}
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                        cursor: "pointer",
                    }}
                    component={Link}
                    to="/"

                >
                  
                    <CTypography
                        fontSize="50px"
                        fontWeight="700"
                        textTransform="uppercase"
                        color='teal'
                    >
                        RIzu..
                    </CTypography>
                </Stack>

                {/* navbar section */}
                <Stack
                    sx={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
                        backdropFilter: 'blur(20.8333px)',
                    }}
                    direction="row"
                    spacing={2}
                    p={3}
                >
                    {
                        routes.map((route, index) => {
                            return (
                                <NavLink
                                    to=''
                                    key={index}
                                    style={({ isActive }) => (isActive ?
                                        {
                                            color: "#fff",
                                            // color: "#fff",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            borderBottom: "2px solid #AD1AAF",
                                        }
                                        : {
                                            color: "#fff",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                        })}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            "&:hover": {
                                                color: "#AD1AAF",
                                            }
                                        }}

                                    >{route.name}
                                    </Box>
                                </NavLink>
                            )
                        })
                    }

                </Stack>
                {/* button and avater  */}
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={4}
                >
                    

              
                </Stack>
            </Stack>
            <IconButton
                onClick={() => setOpen(true)}
                sx={{ mr: 2, display: { md: 'none' }, color: "#fff" }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="left"
                sx={{
                    '.MuiDrawer-paper': {
                        width: '70%',
                        backgroundColor: '#140C1F',
                    },
                    display: { xs: 'block', md: 'none' },
                }}

            >
                {/* navmenu logo */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={'space-around'}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            cursor: "pointer",
                        }}
                        component={Link}
                        to="/"

                    >
                        <img src={logo} alt="logo"
                            style={{
                                width: 50,
                                height: 50
                            }}
                        />
                        <CTypography
                            fontSize="30px"
                            fontWeight="700"
                            textTransform="uppercase"

                        >
RIZU                        </CTypography>
                    </Stack>
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ color: "#fff" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                {/* navmenu section */}
                <Stack
                    spacing={2}
                    p={3}
                    textAlign="center"
                >
                    {
                        routes.map((route, index) => {
                            return (
                                <NavLink
                                    to={Influencers}
                                    key={index}
                                    style={({ isActive }) => (isActive ?
                                        {
                                            color: "#fff",
                                            // color: "#fff",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            padding: '10px 0',
                                            borderRadius: '4px',
                                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
                                            backdropFilter: 'blur(20.8333px)',
                                        }
                                        : {
                                            color: "#fff",
                                            fontSize: '16px',
                                            fontWeight: 400,
                                        })}
                                    onClick={() => setOpen(false)}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            "&:hover": {
                                                color: "#AD1AAF",
                                                borderBottom: "2px solid #AD1AAF",
                                            }
                                        }}

                                    >{route.name}
                                    </Box>
                                </NavLink>
                            )
                        })
                    }

                </Stack>

            </Drawer>

        </Box>
    )
}
