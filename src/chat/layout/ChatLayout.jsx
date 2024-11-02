import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBarLeft, SideBarRight } from '../components';

import { useDispatch, useSelector } from "react-redux";
import { startLoadChatsAll } from '../../store';
import { useEffect } from 'react';

const drawerLeftWidth = 450;
const drawerRightWidth = 387;

export const ChatLayout = ({ children }) => {

  const dispatch = useDispatch()
  const { active: activeChat } = useSelector((state) => state.chat);

  // useEffect(() => {
  //   dispatch(startLoadChatsAll())
  // }, [])

  return (
    <Box sx={{ display: 'flex', flex: 1, height: '100vh', overflow: 'hidden' }} className='animate__animated animate__fadeIn animate__slow'>
        <NavBar />
        <SideBarLeft drawerWidth={ drawerLeftWidth } />
        <Box 
            component='main'
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%' 
            }}
        >
          <Toolbar />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: 1 }}>
            { children }
          </Box>
        </Box>
        {(!!activeChat ?  <SideBarRight drawerWidth={ drawerRightWidth } /> : <></>)}
    </Box>
  )
}
