// scroll bar
import 'simplebar/src/simplebar.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// redux
import { store, persistor } from './redux/store';
// contexts
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </LocalizationProvider>
    </ReduxProvider>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
