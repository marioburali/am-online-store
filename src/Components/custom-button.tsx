import React from 'react';
import { Button } from '../components/ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient'
}

export function CustomButton({ children, variant = 'gradient', ...props }: CustomButtonProps) {
  return (
    <Button variant={ variant } { ...props }>
      {children}
    </Button>
  );
}
