import Router from './routes';

import ThemeProvider from './theme';
import { ChartStyle } from './components/chart';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ChartStyle />
        <Router />
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
