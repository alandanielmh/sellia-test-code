import { Box, Button, TextField, useTheme } from '@mui/material'
import React, { useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useDispatch } from 'react-redux';
import { startSaveChat } from '../../store';
import { chatInputStyle } from '../../theme/styles';

export const ChatInput = () => {

    const theme = useTheme()
 
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    
    const onSendMessage = ((event) => {
        if (message === '') return
        setMessage('')
        dispatch(startSaveChat(message))
    })
    
    

  return (
    <Box sx={{p:1, backgroundColor: 'secondary.main', display: 'flex', border: `1px solid ${theme.palette.borderColor.main}`}}>
        <Box sx={{justifyContent: 'center', alignContent: 'center'}}>
            <Button sx={{ minWidth: 'auto', mr: 1}}>
                <AttachFileIcon sx={{color:'text.main'}} style={{ transform: 'rotate(45deg)'}}/>
            </Button>
        </Box>
        <Box sx={{display:'flex', flex: 1, alignContent: 'center', gap: 1}}>
            <TextField  
            maxRows={40}  
            multiline  
            placeholder='Escriba su mensaje...' 
            size='small' 
            sx={chatInputStyle} 
            name="mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
            <Button sx={{ minWidth: 'auto', mr: 0,}}>
                <AddReactionIcon sx={{ alignSelf:' center',  color: 'text.main'}}/>
            </Button>
            <Button onClick={onSendMessage } sx={{ minWidth: 'auto', mr: 0}}>
                <NearMeIcon sx={{ alignSelf:' center', color: 'text.main'}}/>
            </Button>
        </Box>
    </Box>
  )
}
