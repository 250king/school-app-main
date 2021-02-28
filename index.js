import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Appbar, BottomNavigation, Provider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import Activity from './src/activity';
import My from './src/my';

const routes = [
  {key: 'activity', title: '活动', icon: 'star'},
  {key: 'my', title: '我的', icon: 'account'},
];
const App = () => {
  const [index, setIndex] = React.useState(0);
  const renderScene = BottomNavigation.SceneMap({
    activity: () => <Activity />,
    my: () => <My />,
  });
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider>
      <Appbar.Header>
        <Appbar.Content title={routes[index].title} />
      </Appbar.Header>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
