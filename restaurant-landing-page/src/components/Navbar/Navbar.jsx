import { useState } from 'react';
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
      text: "Nosotros",
      icon: <InfoIcon />,
      target: "about",
    },
    {
      text: "Cómo Funciona",
      icon: <InfoIcon />,
      target: "work",
    },
    {
      text: "Testimonios",
      icon: <CommentRoundedIcon />,
      target: "testimonials",
    },
    {
      text: "Contacto",
      icon: <PhoneRoundedIcon />,
      target: "contact",
    },
  ];

  const pedidosYaUrl = "https://www.pedidosya.com.ar/?sem_tracker=20571694544&pycat=googlesearch&cmp=&ag=pedidos%20ya%20%28bm%29&kwd=pedidos%20ya&mt=b&net=g&dev=c&sitelink=&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0kGCVXeNAlOGjGxNec9o_vjXaWrXETPrCRC7u7IbyJHS0Ebn6txw4aAoCuEALw_wcB";
  const handlePedidosYaClick = () => {
    window.open(pedidosYaUrl, '_blank');
  };

  return (
    <nav className="flex items-center justify-between  ">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="w-20 h-20 mt-2" />
      </div>

      <div className="navbar-links-container text-black">
        <Link to="about" smooth={true} duration={500} className="text-base font-semibold cursor-pointer hover:text-gray-500">Nosotros</Link>
        <Link to="work" smooth={true} duration={500} className="text-base font-semibold cursor-pointer  hover:text-gray-500">Cómo Funciona</Link>
        <Link to="testimonials" smooth={true} duration={500} className="text-base font-semibold cursor-pointer  hover:text-gray-300">Testimonios</Link>
        <Link to="contact" smooth={true} duration={500} className="text-base font-semibold cursor-pointer  hover:text-gray-300">Contacto</Link>
        <a href={pedidosYaUrl} className="text-2xl" target="_blank" >
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </a>
        <Button onClick={handlePedidosYaClick} className="primary-button bg-white border rounded-3xl text-lg font-semibold px-4" label="Reservá ahora" />
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