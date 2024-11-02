import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#F5F7FA',
            disabled: '#C9C8D3'
        },
        secondary: {
            main: '#FEFEFF'
        },
        tertiary: {
            main: '#FEFEFF'
        },
        stroke:{
            main: '#061A74',
            gray: '#BDBCDB'
        },
        error: {
            main: '#F93232',
        },
        warning:{
            main:'#FFB82E'
        },
        success: {
            main: '#439F6E'
        },
        text:{
            main: '#212121',
            secondary: '#8A8894',
            terniary: '#FFFFFF',
            third: '#C9C8D3',
            disabled: 'C5C0DB'
        },
        button:{
            main:'#212121',
            stroke: '#061A74',
            disabledBG:'#F4F3FE',
            disabledText: '#C5C0DB',
            color: '#FFFFFF'
        },
        field: {
            main: '#F9F9FD',
            placeholder: '9D99AC',
            text: '#212121'
        },
        layout:{
            main:'#FFFFFF',
            seconday: '#0D7375'
        },
        buttonLayout:{
            main:'#0D7375',
            secondary:'#FFFFFF'
        },
        borderColor:{
            main: '#061A74'
        },
        listColorItem: {
            main: '#BDBCDB',
            secondary: '#C4C5C8',
            selected: '#425473',
        },
        chatArea: {
            main: '#C9C8D3'
        },
        listItemText:{
            main: '#425473'
        },
        login: {
            main: '#0D7375',
            text: '#0D7375'
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#0D1D3C',
			disabled: '#C9C8D3'
        },
        secondary: {
            main: '#2D4164',
            third: '#425473'
        },
		tertiary: {
            main: '#FEFEFF'
        },
        stroke:{
            main: '#061A74',
            gray: '#BDBCDB'
        },
        error: {
            main: '#F93232',
        },
        warning:{
            main:'#FFB82E'
        },
        success: {
            main: '#439F6E'
        },
         text:{
            main: '#FFFFFF',
            secondary: '#8A8894',
            terniary: '#FFFFFF',
            third: '#C9C8D3',
            disabled: 'C5C0DB'
        },
        button:{
            main:'#FFFFFF',
            stroke: '#061A74',
            disabledBG:'#F4F3FE',
            disabledText: '#C5C0DB',
            color: '#212121'
        },
        field: {
            main: '#F9F9FD',
            placeholder: '9D99AC',
            text: '#FFFFFF'
        },
        layout:{
            main:'#212121'
        },
        buttonLayout:{
            main:'#0D7375',
            secondary:'#FFFFFF'
        },
        borderColor:{
            main: '#000000'
        },
        listColorItem: {
            main: '#BDBCDB',
            secondary: 'transparent',
            selected: '#425473',
        },
        chatArea: {
            main: '#425473'
        },
        listItemText:{
            main: '#FFFFFF'
        },
        login:{
            main: '#FFFFFF',
            text: '#212121'
        }
        
    }
})







