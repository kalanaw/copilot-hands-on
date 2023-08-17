# Hands-on Session Overview

In this hands-on session, one developer from each project will participate and collaborate in pairs.

## Participation Details

- Each project will nominate one developer to participate.
- Developers will work in pairs.
- A project repository will be provided as a starting point.

-----

## Task List

#### We are building a web application and its API, that helps us to find available meeting slots for a meeting, based on meeting room availability and duration required.

### 1. Front-End: Create a login page with email address and password.

- Email address should be validated.
- Should roughly follow the given mockup.

##### Explore:
- Using prompts to generate the login UI layout and styling.
- Using prompts to write the Email validation function.

**----  Discussion ----**

- What are the prompts you used?
- What prompts didn’t work and why?

---

### 2. Back-end: Find a free meeting room slot
We need to create a feature where a user can enter start date-time and duration of a meeting they want to have. We know the existing booking in our two meeting rooms.

- Write a function to find a free meeting room slot for a given datetime and duration. Use the given mock data function `fetchMeetingRoomData` in `meetingRoomData.ts` as the data source.
- Write unit tests for function and end-point.
- Expose the function as a API end-point.

**----  Discussion ----**

- What are the prompts you used?
- What prompts didn’t work and why?

-----
## Stretch goals, welcome to try:

3. **Back-End (BE):** Create an API endpoint to receive login details and respond with a hardcoded token using HTTP 200 status.

4. **Front-End (FE):** Write an API request to communicate with the login API.

5. **Front-End (FE):** Add routing to the React project using `react-router-dom`.

6. **Front-End (FE):** Add page where user can pick date-time and duration for the meeting and query the API.


## Tech Stack

- **Backend:** NodeJS/Express with TypeScript
- **Front-end:** React with TypeScript
- **Unit Testing:** Jest with TypeScript

## Knowledge Sharing

- Participants are encouraged to share screenshots of prompts and their results in a chat.
- We will discuss experience in prompt engineering during discussion hours.
