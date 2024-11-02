import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { formatDateTo12Hour } from '../../utils/shared'
import { useSelector } from 'react-redux'

export const ChatAreaItemStart = ({message, date}) => {
    const {active} = useSelector((state) => state.chat)

  return (
    <ListItem alignItems='flex-start'>
        <Box sx={{ width: '80%'}}>
        <Box sx={{ display: 'flex', width: '80%'}}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={active.photoURL}/>
            </ListItemAvatar>
            <Paper sx={{ width: 'auto', p: 1.5, backgroundColor: '#9D99AC', borderRadius: '20px'}}>
                {message}
            </Paper>
        </Box>
        <Box display={'flex'} sx={{mt: 1}}>
            <ListItemAvatar></ListItemAvatar>
            <Typography sx={{color: '#FFFFFF'}}>{formatDateTo12Hour(date)}</Typography>
        </Box>
        </Box>
    </ListItem>
  )
}

