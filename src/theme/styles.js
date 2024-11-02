export const buttonTheme = ( theme ) => {
    return {
        backgroundColor:'button.color', 
        color: 'button.main', 
        borderRadius: '15px', 
        border: `1px solid ${theme.palette.button.main}`, 
        width: '110px', 
        justifyContent:'space-around'
    }
}

export const boxLayoutAuth = {
    width: { sm: 450 },
    backgroundColor: 'login.main', 
    padding: 3, 
    borderRadius: 2,
    mt: 4
}

export const textFieldStyleLogin = {
    backgroundColor: 'field.main', 
    color: '#212121', 
    borderRadius: '5px',
    "& .MuiInputLabel-outlined": {
        color: "#212121",
        fontWeight: "regular",
    }
}

export const textFieldStyleRegister = {
    "& .MuiOutlinedInput-root": {
        backgroundColor: 'field.main',
    },
        color: '#212121', borderRadius: '5px',"& .MuiInputLabel-outlined": {
        color: "#212121",
        fontWeight: "regular",
    }
}

export const chatInputStyle = {
    width: '100%', 
    border: 'none',
    '& .MuiOutlinedInput-root': {  
        '& fieldset': {      
            borderColor: 'transparent',   
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {  
            borderColor: 'transparent',
        },
        textarea: {  
            color: 'text.main',
            '&::placeholder': {
                color: 'text.main',
                opacity: 1,
            }
        }
    },
}

export const listLeftStyle = {
    '&& .Mui-selected, && .Mui-selected:hover': {
        bgcolor: 'listColorItem.selected',
        '&, & .MuiListItemIcon-root': {
            color: 'text.terniary',
        },
    },
    '& .MuiListItemButton-root:hover': {
    bgcolor: '#425473',
    '&, & .MuiListItemIcon-root': {
        color: 'text.terniary',
    },
    },
}

export const buttonRightStyle = (item) => {
    return {
        width: '90%',
        heigh: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '20px',
        backgroundColor: item.color,
        fontSize: { xs: '14px', sm: '16px' },
        py: { xs: 1, sm: 1.5 },
        my: 2,
        mx: 3,
    }
}

export const drawerPaperLeft = (drawerWidth, theme) => {
    return {
      display: { xs: "block" },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
        mt: "80px",
        px: "20px",
        pt: "15px",
        backgroundColor: "primary.main",
        border: `1px solid ${theme.palette.borderColor.main}`,
        height: `calc(100% - 80px)`,
      },
    };
}

export const drawerPaperRight = (drawerWidth, theme) => {
    return {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            mt: "80px",
            backgroundColor: "primary.main",
            border: `1px solid ${theme.palette.borderColor.main}`,
            height: `calc(100% - 80px)`,
          },
    };
}

export const buttonMultimediaStyle = {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '20px',
    backgroundColor: '#061A74',
    fontSize: { xs: '14px', sm: '16px' },
    py: { xs: 1, sm: 1.5 },
    my: 2,
    mx: 3,
}

export const chatBoxViewStyle = (theme) => {
  return {
    overflowY: "auto",
    backgroundColor: "chatArea.main",
    border: `1px solid ${theme.palette.borderColor.main}`,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "99.5%",
    minHeight: "100%",
  };
};