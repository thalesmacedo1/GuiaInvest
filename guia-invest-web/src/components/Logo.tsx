import React from 'react';
import { useTheme } from '@mui/material/styles';

interface LogoProps {
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ height = 40 }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <svg
      height={height}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="35"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill={isDark ? '#FFFFFF' : '#0C2C52'}
      >
        Guia
      </text>
      <text
        x="80"
        y="35"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="#00D37F"
      >
        Invest
      </text>
      <path
        d="M5 45 H195"
        stroke="#00D37F"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Logo; 