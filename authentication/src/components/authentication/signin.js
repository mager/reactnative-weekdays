var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;
var Button = require('../common/button');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign in</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({
            username: text
          })} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({
            password: text
          })}
          secureTextEntry={true} />

        <Button text={'Sign in'} onPress={this.onPress} />
      </View>
    );
  },
  onPress: function() {
    // Log the user in
    this.setState({
      password: ''
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});