import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Navigation} from './src/app/navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
