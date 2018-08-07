import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingText: true
    };
  }

  blink() {
    setInterval((() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }), 1000);
  }

  render() {
    this.blink();

    let display = this.state.isShowingText ? 'Blink!' : ' ';

    let pic = {
      uri: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350'
    };

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.big}>Welcome to Foolet</Text>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
        {/* <View style={{flex: 2, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.big}>Blue</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.big}>Dark Blue</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
