import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { formatDateTo12Hour } from '../../utils/shared'
import { useSelector } from 'react-redux'
export const ChatAreaItemEnd = ({message, date}) => {
    const {photoURL} = useSelector((state) => state.auth)
  return (
    <ListItem sx={{ flexDirection: 'row-reverse'}} alignItems='flex-start'>
        <Box sx={{width: '80%'}}>
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row-reverse'}}>
            <Box sx={{ display: 'flex', width: '80%',  flexDirection: 'row-reverse'}}>
                <ListItemAvatar sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                    <Avatar alt="Remy Sharp" src={photoURL}/>
                </ListItemAvatar>
                <Paper sx={{ width: 'auto', p: 1.5, backgroundColor: '#9D99AC', borderRadius: '20px'}}>
                   { message }
                </Paper>
            </Box>
        </Box>
        <Box display={'flex'} sx={{mt: 1, flexDirection: 'row-reverse'}}>
            <ListItemAvatar  sx={{ display: 'flex', flexDirection: 'row-reverse'}}></ListItemAvatar>
            <Typography sx={{color: '#FFFFFF', display: 'flex', flexDirection: 'row-reverse'}}>{formatDateTo12Hour(date)}</Typography>
        </Box>
        </Box>
    </ListItem>
  )
}

