import { Box, Grid2, useTheme } from '@mui/material'
import React from 'react'
import { ChatArea, ChatInput } from '../components'
import { chatBoxViewStyle } from '../../theme/styles'

export const ChatBoxView = () => {
  const theme = useTheme()
  return (
    <Box sx = { chatBoxViewStyle(theme)}>
      <Grid2 item >
      </Grid2>
      <ChatArea />
      <ChatInput />
    </Box>
  )
}
