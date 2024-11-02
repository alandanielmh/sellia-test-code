import {
  Avatar,
    Grid2 as Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import { useMemo } from "react";
import { getLastMessage } from "../../helpers/uploadAll";
import { formatDateTo12Hour } from "../../utils/shared";
  import { useDispatch } from "react-redux";
  import { setActiveChat } from "../../store";
  
  export const SideBarItem = ({ id,idCliente, name = '', photoURL, chats = [] , selectedIndex, handleListItemClick}) => {
  
    const dispatch = useDispatch()
  
    const onClickChat = () => {
      dispatch(setActiveChat({id, idCliente, name, photoURL, chats,}))
      handleListItemClick(id)
    }

    const gettingLastMessage = useMemo(() =>{
      const lastMessage = getLastMessage(chats)
      return lastMessage
    },[chats])


    const lastMessage = useMemo(() =>{
      const message= gettingLastMessage.message.text
      return message.length > 17 
      ? message.substring(0,17) + '...'
      : message
    } ,[chats])
  
  
    return (
      <ListItem key={ id} disablePadding className="listItem__element" sx={{backgroundColor: 'listColorItem.secondary', color: 'listItemText.main'}}>
        <ListItemButton sx={{ borderRadius: '10px'}} onClick={() => onClickChat()}  selected={selectedIndex === id}>
          <ListItemIcon >
            <Avatar sx={{ width: 80, height: 80}} alt="Remy Sharp" src={photoURL} />
          </ListItemIcon>
          <Grid container display={'flex'} spacing={2} justifyContent={'space-between'} sx={{width:'100%', ml: '15px'}}>
            <Grid copntainer >
              <ListItemText primary={ name} />    
              <ListItemText primary={ lastMessage} />
            </Grid>
            <Typography
              sx={{ justifySelf: 'end', alignSelf: 'center'}}
            >{ formatDateTo12Hour( gettingLastMessage.createdAt)}</Typography>
          </Grid>
        </ListItemButton>
      </ListItem>
    );
  };
  