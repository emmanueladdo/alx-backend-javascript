import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room = [];
  room.push(new ClassRoom(19));
  room.push(new ClassRoom(20));
  room.push(new ClassRoom(34));

  return room;
}
