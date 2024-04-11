import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const order = [19, 20, 34];
  let i = 0;
  while (i < order.length) {
    rooms.push(new ClassRoom(order[i]));
    i += 1;
  }
  return rooms;
}
