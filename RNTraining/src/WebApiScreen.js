import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';

export default class WebApiScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false }
  }

  getMusicAlbums=() =>{
    this.setState({ isLoading: true });
    return fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response)
        this.setState({
          isLoading: false,
          dataSource: response,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }


  renderMusicAlbum = (musicItem)=>{
    return (
      <View style={{alignItems:'center',marginTop:20}}>
        <Text style={{fontWeight:'bold',color:'#FF5733'}}>Title: {' '+musicItem.title} </Text>
        <Text>Artist:{' '+musicItem.artist}</Text>
      </View>
    )
  }
  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Button
          onPress={this.getMusicAlbums}
          title="Get Music Albums"
          color="#841584"
          accessibilityLabel="Albums_Button"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => this.renderMusicAlbum(item)}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
}