import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  burgerColor: '#ee4d2e',
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   return (
//     <React.Fragment>
//       <AppBar position='fixed' sx={{ background: '#ee4d2d' }}>
//         <Container maxWidth='xl'>
//           <Toolbar disableGutters>
//             <Typography
//               variant='h'
//               noWrap
//               component='div'
//               sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//             >
//               <Link to='/'>Ecommerce</Link>
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size='large'
//                 alt='abc'
//                 aria-label='account of current user'
//                 aria-controls='menu-appbar'
//                 aria-haspopup='true'
//                 onClick={handleOpenNavMenu}
//                 color='inherit'
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id='menu-appbar'
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Link style={{ color: '#000' }} to={'/products'}>
//                     Products
//                   </Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Link style={{ color: '#000' }} to={'/contact'}>
//                     Contact
//                   </Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Link style={{ color: '#000' }} to={'/about'}>
//                     About
//                   </Link>
//                 </MenuItem>
//               </Menu>
//             </Box>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={'/products'}>Products</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={'/contact'}>Contact</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={'/about'}>About</Link>
//               </MenuItem>
//             </Box>
//             <Typography
//               variant='h6'
//               noWrap
//               component='div'
//               sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//             >
//               <Link to='/'>Ecommerce</Link>
//             </Typography>
//             <IconButton sx={{ mr: '15px', color: '#fff' }}>
//               <Badge badgeContent={1} color='primary'>
//                 <ShoppingCartIcon sx={{ fontSize: 30 }} />
//               </Badge>
//             </IconButton>
//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title='Open settings'>
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id='menu-appbar'
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Link style={{ color: '#000' }} to={'/login'}>
//                     Profile
//                   </Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Link style={{ color: '#000' }} to={'/about'}>
//                     Dashboard
//                   </Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Link style={{ color: '#000' }} to={'/logout'}>
//                     Logout
//                   </Link>
//                 </MenuItem>
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;

