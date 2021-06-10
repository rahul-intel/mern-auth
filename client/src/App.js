
import { Grommet } from 'grommet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '16px',
      height: '20px',
    },
    formField: {
      label: {
        color: 'dark-3',
        size: 'xsmall',
        margin: { vertical: '0', bottom: 'small', horizontal: '0' },
        weight: 600,
      },
      font: {
        family: 'Roboto',
        size: '14px',
        height: '15px',
      },
      border: false,
      margin: '0',
    },
    control:{
      border:{
        radius: "12px"
      }
    }
  },
};


const App = () => {
  return (
    <Grommet full theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
