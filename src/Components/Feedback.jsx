import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const Feedback = ({ open, handleClose }) => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Здесь можно добавить логику для отправки обратной связи
    console.log('Отзыв:', feedback);
    console.log('Email:', email);
    handleClose(); // Закрыть всплывающее окно после отправки
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Форма обратной связи</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Введите ваш отзыв"
          type="text"
          fullWidth
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <TextField
          margin="dense"
          label="Email (для ответа)"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSubmit}>Отправить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Feedback;
