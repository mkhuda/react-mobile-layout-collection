import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import {Container, Content, Button, H1, H2, H3, Icon, List, ListItem} from 'native-base';

const styles = StyleSheet.create({
  drawerwrap: {
    backgroundColor: '#222',
  },
  container: {
    backgroundColor: '#222',
    paddingTop: 10
  },
  containerbutton: {
    marginTop: 10,
  },
  drawerbutton: {
    fontSize: 18,
    paddingLeft: 5,
  },
  buttonstyle: {
    paddingTop: 30,
    paddingBottom: 30,
  }
});

class DrawerBasic extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <Container style={styles.drawerwrap}>
        <Content>
          <View style={styles.container}>
            <H3 style={{textAlign: 'center'}}>Menu</H3>
            <View style={styles.containerbutton}>
              <Button iconLeft transparent light style={styles.buttonstyle}>
                <Icon name='ios-arrow-dropright-circle-outline' />
                <Text style={styles.drawerbutton}>Menu Number 1</Text>
              </Button>
              <Button iconLeft transparent light style={styles.buttonstyle}>
                <Icon name='ios-arrow-dropright-circle-outline' />
                <Text style={styles.drawerbutton}>Menu Number 2</Text>
              </Button>
              <Button iconLeft transparent light style={styles.buttonstyle}>
                <Icon name='ios-arrow-dropright-circle-outline' />
                <Text style={styles.drawerbutton}>Menu Number 3</Text>
              </Button>
              <Button iconLeft transparent light style={styles.buttonstyle}>
                <Icon name='ios-arrow-dropright-circle-outline' />
                <Text style={styles.drawerbutton}>Menu Number 4</Text>
              </Button>
              <Button iconLeft transparent light style={styles.buttonstyle}>
                <Icon name='ios-arrow-dropright-circle-outline' />
                <Text style={styles.drawerbutton}>Menu Number 5</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default DrawerBasic;
