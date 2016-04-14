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
  View
} from 'react-native';


  // render() {
  //   var movie = MOCKED_MOVIES_DATA[0];
  //   return (
  //     <View style={styles.container}>
  //       <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
  //       <View style={styles.rightContainer}>
  //         <Text style={styles.title}>
  //           {movie.title}
  //         </Text>
  //         <Text style={styles.year}>
  //           {movie.year}
  //         </Text>
  //       </View >
  //     </View>
  //   );
  // }

  

 

  class rn_demo extends Component {

    componentDidMount(){
      this.fetchData();
    }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            movies: responseData.movies,
          });
        })
        .done();
    }

    constructor(props){
      super(props);
      this.state = {
        movies:null,
      };
    }   

    render() {
      if (!this.state.movies) {
        return this.renderLoadingView();
      }

      var movie = this.state.movies[0];
      return this.renderMovie(movie);
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail:{
    width:60,
    height:80,
  },
});

AppRegistry.registerComponent('rn_demo', () => rn_demo);
