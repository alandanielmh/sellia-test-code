import { FormControl, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from  "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <FormControl sx={{ margin: '0px',}}>
        <TextField
          size="small"
          variant="outlined"
          placeholder='Buscar'
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#F9F9FD',
              borderRadius: '60px',
              height: '50px',
            },
          }}
          slotProps={{
            input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: '35px'}}/>
                  </InputAdornment>
                ),
                },
            }}
        />
      </FormControl>
  )
}