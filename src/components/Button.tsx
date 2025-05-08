import React from 'react';
import './Button.css'

type ButtonProps = {
  className?: string;
  onClick?: ()=>void;
  children: React.ReactNode;
  theme?: 'primary' | 'outline';
  style?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({className, onClick, children, theme='outline', style, size}) => {
  const classes = `btn ${theme === 'primary' ? 'primary' : 'outline'} ${size === 'md'?'md':size === 'lg'?'lg':size === 'sm'?'sm':'md'} ${className}`;
  return (
    <button className={classes} onClick={onClick}>{children}</button>
  )
}

export default Button
