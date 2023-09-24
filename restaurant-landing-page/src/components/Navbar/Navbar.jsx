import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; 
import Logo from "../../assets/foodie.png";
import { Button } from "../Button/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      target: "home", 
    },
    {
      text: "About",
      icon: <InfoIcon />,
      target: "about", 
    },
    {
      text: "Work",
      icon: <InfoIcon />,
      target: "work", 
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      target: "testimonials", 
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      target: "contact", 
    },
  ];

  return (
    <nav className="flex items-center justify-between  ">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="w-20 h-20 mt-2" />
      </div>

      <div className="navbar-links-container text-black">
        <Link to="home" smooth={true} duration={500} className="text-lg font-semibold">Home</Link>
        <Link to="about" smooth={true} duration={500} className="text-lg font-semibold">About</Link>
        <Link to="work" smooth={true} duration={500} className="text-lg font-semibold">Work</Link>
        <Link to="testimonials" smooth={true} duration={500} className="text-lg font-semibold">Testimonials</Link>
        <Link to="contact" smooth={true} duration={500} className="text-lg font-semibold">Contact</Link>
        <a href="#" className="text-2xl">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </a>
        <Button className="primary-button bg-white border rounded-3xl text-lg font-semibold px-4" label="Bookings Now" />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link to={item.target} smooth={true} duration={500}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};