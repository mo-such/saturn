import { ApolloError } from '@apollo/client';
import { Alert, AlertTitle } from '@mui/material';
import { useState } from 'react';

interface ErrorInfoProps {
  error?: ApolloError;
}

export const ErrorInfo = ({ error }: ErrorInfoProps) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  if (!error || !open) return null;

  return (
    <Alert severity="error" onClose={handleClose}>
      <AlertTitle>{error.name}</AlertTitle>
      {error.message}
    </Alert>
  );
};
