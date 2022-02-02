import { AppRouter } from './router';
import { GlobalStyles } from './styles/global';
import { Provider } from 'react-redux';
import { store } from './domains/store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
