import React from 'react';
import { Button } from '../components/ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function CustomButton({ children, variant = 'default', ...props }: CustomButtonProps) {
  return (
    <Button variant={ variant } { ...props }>
      {children}
    </Button>
  );
}
