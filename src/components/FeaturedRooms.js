import React from 'react';
import { RoomContext } from '../context'

export default class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    const { name, greeting } = this.context;
    return (
      <div>hello {name} from {greeting}</div>
    )
  }
}