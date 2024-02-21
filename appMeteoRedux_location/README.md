appMeteoRedux_location
This app was developed using React, React-Bootstrap, React-Router-dom and Redux. 
This is the improved version of the previous app:
- the user writes a city, the router moves to a "select a city page" (the API takes the city name as an input and returns coordinates of all the cities with that name)
- by clicking on the desired location, the city coordinates are used to do a second call to another API, also the router navigates to another page
- here the page is populated with API data
- text and images were given opacity 1 to improve UX
- weather icons were substituted with icons from the API
- modal appears also if the user doesn't give a query (empty field is sent)