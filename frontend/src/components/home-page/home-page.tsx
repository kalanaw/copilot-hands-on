import "./home-page.scss";
import React, {useState} from "react";

interface HomePageProps {}

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  // home page displays a list of meeting rooms that are available for booking
  // each meeting room has a name, capacity and and booked time slots

  // initize the state for meeting rooms
  const [meetingRooms, setMeetingRooms] = useState([
    {
      meetingRoomId: 1,
      name: "Meeting Room 1",
      capacity: 10,
      bookedTimeSlots: [
        {
          startTime: "2021-07-01T09:00:00",
          endTime: "2021-07-01T10:00:00",
        },
        {
          startTime: "2021-07-01T11:00:00",
          endTime: "2021-07-01T12:00:00",
        },
      ],
    },
    {
      meetingRoomId: 2,
      name: "Meeting Room 2",
      capacity: 5,
      bookedTimeSlots: [
        {
          startTime: "2021-07-01T09:00:00",
          endTime: "2021-07-01T10:00:00",
        },
        {
          startTime: "2021-07-01T11:00:00",
          endTime: "2021-07-01T12:00:00",
        },
      ],
    },
  ])
  // write a function to find the available meeting rooms given a start time and end time
  const findAvailableMeetingRooms = (startTime: string, endTime: string) => {
    // loop through the meeting rooms and find the ones that have no time conflicts
    const availableMeetingRooms = meetingRooms.filter((meetingRoom: any) => {
      // check if the current meeting room has a time conflict with the start and end time
      const hasTimeConflict = meetingRoom.bookedTimeSlots.some((bookedTimeSlot: any) => {
        // check if the start time and end time fall in between the booked time slots
        const startTimeConflict = new Date(bookedTimeSlot.startTime) <= new Date(startTime) && new Date(bookedTimeSlot.endTime) >= new Date(startTime),
        endTimeConflict = new Date(bookedTimeSlot.startTime) <= new Date(endTime) && new Date(bookedTimeSlot.endTime) >= new Date(endTime);
        return startTimeConflict || endTimeConflict;
      });
      // if there is no time conflict, return the meeting room
      return !hasTimeConflict;
    });
    // return the available meeting rooms
    return availableMeetingRooms;
  };

  return (
    <div className="meeting-room-list-section">
      <h1>Meeting Rooms</h1>
      <div className="search-meeting-rooms">
        {/* a form that has two date pickers for start and end dates and a search button */}
        {/* include formcontainer, form-row, form-field and form-error divs */}
        <div className="form-container">
          <form>
            <div className="form-row">
              <div className="form-field">
                <label>Start Time</label>
                <input type="datetime-local" />
              </div>
              <div className="form-field">
                <label>End Time</label>
                <input type="datetime-local" />
              </div>
              <div className="form-field">
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="meeting-room-list">
        {/* generate a card component that displays details about each room */}
        {meetingRooms.map((meetingRoom: any) => {
          return (
            <div key={meetingRoom.id} className="meeting-room-card">
              <h2>{meetingRoom.name}</h2>
              <p>Capacity: {meetingRoom.capacity}</p>
              <p>Booked Time Slots:</p>
              <ul>
                {meetingRoom.bookedTimeSlots.map((bookedTimeSlot: any) => {
                  return (
                    <li>
                      {bookedTimeSlot.startTime} - {bookedTimeSlot.endTime}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};