/**
 * UNPeriodico
 */
'use strict';
import React, {
  AppRegistry,
  Navigator,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Image,
  ToolbarAndroid,
  BackAndroid,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const MK = require('react-native-material-kit');
const {
  setTheme,
  MKColor
} = MK;
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';

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
    var base64Icon = 'http://unperiodico.unal.edu.co/uploads/pics/UNPeriodico191-150806-02_03.jpg';
    var base64Icon2 = 'http://unperiodico.unal.edu.co/typo3temp/_processed_/csm_UNPeriodico191-150806-01_02_5448490e68.jpg';
    var base64Icon3 = 'http://unperiodico.unal.edu.co/typo3temp/_processed_/csm_UNPeriodico191-150806-01_03_f8e9c5550e.jpg';
    var base64Icon4 = 'http://unperiodico.unal.edu.co/typo3temp/_processed_/csm_UNPeriodico191-150806-02_96f1befe9c.jpg';
    var base64Icon5 = 'http://unperiodico.unal.edu.co/typo3temp/_processed_/csm_UNPeriodico191-150806-01_04_7c64f9ff39.jpg';
    return (
      <ScrollView style={styles.list}
                  contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'El reto es educar para la paz',
            component: Cards,
          });
        }}>
          <Card>
              <Card.Media
                  image={<Image source={{uri:base64Icon}} />}
                  overlay
              >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Portada</Text>
                  <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>El reto es educar para la paz</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Construir una cultura de la democracia y la pedagogía, para forjar estudiantes ciudadanos y crear una verdadera conciencia política en nuestra sociedad, es la gran recomendación que dejó el expresidente de Costa Rica y premio nobel de paz, Óscar Arias, en su paso por la Universidad Nacional. El reconocido líder defendió la negociación y el cese al fuego para llegar a un acuerdo de paz.</Text>
              </Card.Body>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'El reto es educar para la paz',
            component: Cards,
          });
        }}>
          <Card>
              <Card.Media
                  image={<Image source={{uri:base64Icon2}} />}
                  overlay
              >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Portada</Text>
                  <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>El reto es educar para la paz</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Construir una cultura de la democracia y la pedagogía, para forjar estudiantes ciudadanos y crear una verdadera conciencia política en nuestra sociedad, es la gran recomendación que dejó el expresidente de Costa Rica y premio nobel de paz, Óscar Arias, en su paso por la Universidad Nacional. El reconocido líder defendió la negociación y el cese al fuego para llegar a un acuerdo de paz.</Text>
              </Card.Body>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'El reto es educar para la paz',
            component: Cards,
          });
        }}>
          <Card>
              <Card.Media
                  image={<Image source={{uri:base64Icon3}} />}
                  overlay
              >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Portada</Text>
                  <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>El reto es educar para la paz</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Construir una cultura de la democracia y la pedagogía, para forjar estudiantes ciudadanos y crear una verdadera conciencia política en nuestra sociedad, es la gran recomendación que dejó el expresidente de Costa Rica y premio nobel de paz, Óscar Arias, en su paso por la Universidad Nacional. El reconocido líder defendió la negociación y el cese al fuego para llegar a un acuerdo de paz.</Text>
              </Card.Body>
          </Card>
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
            title: 'El reto es educar para la paz',
            component: Cards,
          });
        }}>
          <Card>
              <Card.Media
                  image={<Image source={{uri:base64Icon4}} />}
                  overlay
              >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Portada</Text>
                  <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>El reto es educar para la paz</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Construir una cultura de la democracia y la pedagogía, para forjar estudiantes ciudadanos y crear una verdadera conciencia política en nuestra sociedad, es la gran recomendación que dejó el expresidente de Costa Rica y premio nobel de paz, Óscar Arias, en su paso por la Universidad Nacional. El reconocido líder defendió la negociación y el cese al fuego para llegar a un acuerdo de paz.</Text>
              </Card.Body>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'El reto es educar para la paz',
            component: Cards,
          });
        }}>
          <Card>
              <Card.Media
                  image={<Image source={{uri:base64Icon5}} />}
                  overlay
              >
                  <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Portada</Text>
                  <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>El reto es educar para la paz</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Construir una cultura de la democracia y la pedagogía, para forjar estudiantes ciudadanos y crear una verdadera conciencia política en nuestra sociedad, es la gran recomendación que dejó el expresidente de Costa Rica y premio nobel de paz, Óscar Arias, en su paso por la Universidad Nacional. El reconocido líder defendió la negociación y el cese al fuego para llegar a un acuerdo de paz.</Text>
              </Card.Body>
          </Card>
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
          style={styles.toolbarDetail}
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
  toolbarDetail: {
    backgroundColor: 'rgba(45,44,65,.28)',
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
