import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText, Grid, Divider, Box } from '@mui/material';
import { createUserSuccess, editUserSuccess, deleteUserSuccess, setMessage, setUsers } from '../redux/actions';

const UserManage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const message = useSelector(state => state.users.message);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [editedUserId, setEditedUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/');
      const data = await response.json();
      dispatch(setUsers(data));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = () => {
    const newUser = { name, last_name: lastName, age, id };
    dispatch(createUserSuccess(newUser));
    dispatch(setMessage('Пользователь успешно создан.'));
    clearForm();
  };

  const editUser = () => {
    const editedUser = { id: editedUserId, name, last_name: lastName, age };
    dispatch(editUserSuccess(editedUser));
    dispatch(setMessage('Данные пользователя успешно обновлены.'));
    clearForm();
  };

  const deleteUser = (userId) => {
    dispatch(deleteUserSuccess(userId));
    dispatch(setMessage('Пользователь успешно удален.'));
  };

  const clearForm = () => {
    setName('');
    setLastName('');
    setAge(0);
    setId(0);
    setEditedUserId(null);
  };

  const handleEditUser = (userId) => {
    setEditedUserId(userId);
    const userToEdit = users.find(user => user.id === userId);
    setName(userToEdit.name);
    setLastName(userToEdit.last_name);
    setAge(userToEdit.age);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Управление пользователями</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>Добавить пользователя</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Возраст"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ID"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={createUser} fullWidth>Добавить</Button>
            </Grid>
          </Grid>
          {message && <Typography variant="body1" color="success">{message}</Typography>}
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>Список пользователей</Typography>
      <List>
        {users.map((user) => (
          <div key={user.id}>
            <ListItem>
              <ListItemText primary={`${user.name} ${user.last_name}`} secondary={`Возраст: ${user.age}`} />
              {editedUserId === user.id ? (
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <TextField
                      label="Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Фамилия"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Возраст"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={editUser}>Сохранить</Button>
                  </Grid>
                </Grid>
              ) : (
                <div>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Button variant="outlined" color="primary" onClick={() => handleEditUser(user.id)} sx={{ margin: '10px' }}>Редактировать</Button>
                    <Button variant="outlined" color="secondary" onClick={() => deleteUser(user.id)} sx={{ margin: '10px' }}>Удалить</Button>
                  </Box>
                </div>
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default UserManage;
