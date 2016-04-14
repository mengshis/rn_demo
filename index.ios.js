/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
 
var MOCKED_MOVIES_DATA = [
  {title:'title',
    year:'2015',
    posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
  },
];

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
} from 'react-native';

  class rn_demo extends Component {

    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
        };
      }       


    componentDidMount(){
      this.fetchData();
    }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
          });
        })
        .done();
    }

   
    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      );
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
    }

    renderMovie(movie) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer:{
    flex:1,
  },
  year:{
    textAlign:'center',
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  thumbnail:{
    width:60,
    height:80,
  },
});

AppRegistry.registerComponent('rn_demo', () => rn_demo);
