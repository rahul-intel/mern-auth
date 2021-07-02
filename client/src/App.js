
import { Grommet } from 'grommet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      activeAnchor: 'neutral-2'
    },
    font: {
      family: 'Roboto Slab',
      size: '16px'
    },
    control: {
      border: {
        radius: '12px'
      }
    }
  },
  focus:{
    border:{
      color: '#228BE6'
    },
    outline: {
      color: '#228BE6'
    }
  },
  formField: {
    round: "12px",
    border: {
      side: 'all'
    }
  },
  breakpoints: {
    xsmall: {
      value: 375,
    },
    small: {
      value: 568,
      edgeSize: {
        none: '0px',
        small: '6px',
        medium: '12px',
        large: '24px',
      },
    },
    medium: {
      value: 768,
      edgeSize: {
        none: '0px',
        small: '12px',
        medium: '24px',
        large: '48px',
      },
    },
    large: {
      value: 1024,
      edgeSize: {
        none: '0px',
        small: '12px',
        medium: '24px',
        large: '48px',
      },
    },
    xlarge: {
      value: 1366,
      edgeSize: {
        none: '0px',
        small: '12px',
        medium: '24px',
        large: '48px',
      },
    },
  }
};


const App = () => {
  return (
    <Grommet full theme={theme}>
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
