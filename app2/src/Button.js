import React from 'react';
import { Button as MuiButton } from '@mui/material';


const Button = ({children,onClick}) => <MuiButton onClick={onClick}>App 2 Button {children}</MuiButton>;

export default Button;
