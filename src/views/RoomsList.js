// RoomsList.js
import { RoomsListItem } from './RoomsListItem';

export function RoomsList() {
  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Rooms List</h2>
    <header>Loading...</header>
  `;

  // axios, got, undici, bluebird, itd.
  fetch('http://localhost:3000/rooms')
    .then(response => response.json())
    .then(rooms => {
      console.log(rooms);
      const ul = document.createElement('ul');
      const lis = rooms.map( room => RoomsListItem(room) );

      ul.append( ...lis );
      section.querySelector('header').remove();
      section.append(ul);
    });

  // nie zapomnij o zwroceniu elementu zawierajacego wszystko
  return section;
}

