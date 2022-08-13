//  routes
import Router from './routes';

//  theme
import ThemeProvider from './theme';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ProgressBarStyle />
        <ChartStyle />
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
