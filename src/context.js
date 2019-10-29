import React from 'react';
import items from './data';
import { importDefaultSpecifier } from '@babel/types';
const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    console.log(rooms)
  }

  formatData(items) {
    let tempItems  = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url)
      let room = {...item.fields, images, id};
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };