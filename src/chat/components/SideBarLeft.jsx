import {
    Box,
    Drawer,
    List,
    useTheme,
  } from "@mui/material";
  import { useSelector } from "react-redux";
  import { SearchInput, SideBarItem } from "./";
import { useState } from "react";
import { drawerPaperLeft, listLeftStyle } from "../../theme/styles";
  
  export const SideBarLeft = ({ drawerWidth = 450 }) => {

    const theme = useTheme()

    const { chats } = useSelector((state) => state.chat);
    const [selectedIndex, setSelectedIndex] = useState();

    const handleListItemClick = (index) => {
      setSelectedIndex(index);
    };

    const drawerWidthNav = drawerWidth - 8
    return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidthNav }, flexShrink: { sm: 0 }, mb: '64px'}}
      >
        <Drawer
          variant="permanent" // temporary
          open
           anchor="left"
          sx={drawerPaperLeft(drawerWidth,theme)}
        >
          <SearchInput />
          <List 
          sx={listLeftStyle}>
            {chats.map((chat) => (
              <SideBarItem key={chat.id} {...chat} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick}/>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  };
  