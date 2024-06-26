import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, List, Button, createTheme, ThemeProvider, IconButton } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './Components/Counter';
import NavigationLink from './Components/NavigationLink';
import Layout from './Components/Layout';
import Lab1 from './Pages/Lab1';
import Lab2 from './Pages/Lab2';
import Lab3 from './Pages/Lab3';
import Lab4 from './Pages/Lab4';
import CounterPage from './Pages/CounterPage';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import UserManage from './REST/UserManage';
import MenuIcon from '@mui/icons-material/Menu'; 
import About from './Pages/About';
import TablePage from './Pages/TablePage';
import Users from './rtk/Users';

const ThemeContext = createContext();

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={toggleDrawer} sx={{ marginRight: '10px' }}>
          <MenuIcon />
        </IconButton>
        <Button color="inherit" variant="outlined" component={Link} to="/" sx={{ margin: '10px' }}>
          Главная
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/about" sx={{ margin: '10px' }}>
          О себе
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/reg" sx={{ margin: '10px' }}>
          Регистрация
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/table" sx={{ margin: '10px' }}>
          Таблица
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/rtk" sx={{ margin: '10px' }}>
          RTK
        </Button>
        <Button color="inherit" onClick={toggleTheme} variant="outlined" sx={{ margin: '10px' }}>
          Сменить тему
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <NavigationLink to="/lab1" primary="Лабораторная работа 1" />
          <NavigationLink to="/lab2" primary="Лабораторная работа 2" />
          <NavigationLink to="/lab3" primary="Лабораторная работа 3" />
          <NavigationLink to="/lab4" primary="Лабораторная работа 4" />
          <NavigationLink to="/manage" primary="REST" />
          <NavigationLink to="/counter" primary="Счётчик" />
        </List>
      </Drawer>
    </AppBar>
  );
};
const App = () => {
  const [theme, setTheme] = useState('light');

  // Метод для ищменения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Создание тем
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    // Пример - сообщение в консоль о смене темы
    console.log(`Тема изменена на ${theme === 'light' ? 'светлую' : 'темную'}`);
  }, [theme]);

  return (
    // роуты 
    <Router>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab1" element={<Lab1 />} />
              <Route path="/lab2" element={<Lab2 />} />
              <Route path="/lab3" element={<Lab3 />} />
              <Route path="/lab4" element={<Lab4 />} />
              <Route path="/reg" element={<Registration />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/about" element={<About/>} />
              <Route path="/manage" element={<UserManage />} />
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/rtk" element={<Users />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  );
};

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
