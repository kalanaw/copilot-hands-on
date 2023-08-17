import { Router } from "express";
import { fetchMeetingRoomData } from "../meetingRoomData";
export const getMeetingRoomAvailabilityImplementation = async (
  req: any,
  res: any
) => {
  // given the epochTimeStamp and duration, return the available meeting rooms for that time

  // get the epochTimeStamp and duration from the request
  const { epochTimeStamp, duration } = req.params;
  // convert the epochTimeStamp in secounds to a date string
  const parsedEpochTimeStampInMs = parseInt(epochTimeStamp) * 1000;
  const date = new Date(parsedEpochTimeStampInMs).toISOString().split("T")[0];
  console.log({ date });
  // fetch the meeting room data for that date
  const meetingRoomData = await fetchMeetingRoomData({ date });
  // filter the meeting room data to only include rooms that are available for the given duration using array methods
  const availableMeetingRooms = meetingRoomData.filter((room) => {
    // if the room has no booked times, it is available
    if (room.bookedTimes.length === 0) {
      return true;
    }
    // if the room has booked times, check if the duration is available
    // if the duration is available, return true
    // if the duration is not available, return false

    const isRoomBooked = room.bookedTimes.some((bookedTime) => {
      const startTime = new Date(bookedTime.startTime);
      const endTime = new Date(bookedTime.endTime);
      const durationInMinutes = parseInt(duration);
      const durationInMilliseconds = durationInMinutes * 60000;
      const bookingStartTime = new Date(parsedEpochTimeStampInMs).getTime();
      const bookingEndTime = new Date(
        bookingStartTime + durationInMilliseconds
      ).getTime();
      const isBooked =
        (bookingStartTime >= startTime.getTime() &&
          bookingStartTime < endTime.getTime()) ||
        (bookingEndTime > startTime.getTime() &&
          bookingEndTime <= endTime.getTime());
      console.log({
        start: startTime.toISOString(),
        endTime: endTime.toISOString(),
        bookingStart: new Date(bookingStartTime).toISOString(),
        bookingEnd: new Date(bookingEndTime).toISOString(),
        isBooked,
        durationInMinutes,
      });

      return isBooked;
    });
    return !isRoomBooked;
  });
  // return the available meeting rooms
  res.json({ availableMeetingRooms });
};

export const meetingRoomAvailabilityRoute = () =>
  Router().get(
    "/meetingRoomAvailability/:epochTimeStamp/:duration",
    getMeetingRoomAvailabilityImplementation
  );
