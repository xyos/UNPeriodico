/**
 * UNPeriodico
 */
'use strict';
import React, {
  AppRegistry,
  Navigator,
  DrawerLayoutAndroid,
  TouchableOpacity,
  ToolbarAndroid,
  BackAndroid,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {setTheme, MKColor} from 'react-native-material-kit';

var Buttons = require('./app/buttons');
var TextFields = require('./app/textfields');
var Toggles = require('./app/toggles');
var Progress = require('./app/progress');
var Sliders = require('./app/sliders');
var Cards = require('./app/cards');

setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});



class Home extends Component{
  render() {
    return (
      <ScrollView style={styles.list}
                  contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Buttons',
            component: Buttons,
          });
        }}>
          <Text style={styles.pushLabel}>Buttons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Cards',
            component: Cards,
          });
        }}>
          <Text style={styles.pushLabel}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Loading',
            component: Progress,
          });
        }}>
          <Text style={styles.pushLabel}>Loading</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Sliders',
            component: Sliders,
          });
        }}>
          <Text style={styles.pushLabel}>Sliders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Textfields',
            component: TextFields,
          });
        }}>
          <Text style={styles.pushLabel}>Textfields</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Toggles',
            component: Toggles,
          });
        }}>
          <Text style={styles.pushLabel}>Toggles</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

class unperiodico extends Component {

	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

	setNavigator = (navigator) => {
		this.setState({
			navigator: navigator
		});
	};

  renderHome = (navigator,drawer) => {
    return (
      <View style={styles.container}>
        <Home navigator={navigator} />
        <ToolbarAndroid
          titleColor='#ffffff'
          style={styles.toolbar}
          title="UN Periódico"
          navIcon={require('./img/menu.png')}
          onIconClicked={() => this.state.drawer.openDrawer()}
        />
      </View>
    );
  };

  renderScreen = (route, navigator) => {
    return (
      <View style={styles.container}>
        <route.component
          {...route.passProps}
          navigator={navigator}
        />
        <ToolbarAndroid
          titleColor='#ffffff'
          style={styles.toolbar}
          title={route.title}
          navIcon={require('./img/back.png')}
          onIconClicked={() => navigator.pop()}
        />
      </View>
    )
  };

  routes = (route, navigator, drawer) => {
    switch(route.name){
      case 'home':
        return this.renderHome(navigator, drawer);
      default:
        return this.renderScreen(route,navigator);
    }
  };



  // Back Android
  hardwareBackPress = () => {
    if(!this.state.navigator) {
      return false;
    }
    var currentRoutes = this.state.navigator.getCurrentRoutes();
    if(currentRoutes[currentRoutes.length - 1].name !== 'home'){
      //if not in main screen go back to home
      this.state.navigator.popToTop();
      return true;
    }
    return false;
  };

  componentWillMount(){
    BackAndroid.addEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  render() {
    const {drawer,navigator} = this.state;
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#2d2c41'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return(
    <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navigationView;
                    }
                    return null;
                }}
        ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
      >
        <Navigator
          ref={(navigator) => {!this.state.navigator ? this.setNavigator(navigator) : null}}
          configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          initialRoute={{name: 'home'}}
          renderScene={this.routes}
        />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'rgba(45,44,65,.98)',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  list: {
    backgroundColor: '#eeeeee',
    paddingTop: 64,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20, marginBottom: 0,
  },
  pushLabel: {
    padding: 10,
    color: '#2196F3',
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('unperiodico', () => unperiodico);
