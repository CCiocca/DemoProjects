# DemoProjects

This repository contains the projects of the last week of Epicode course

appMeteoRedux 
is a meteo app that chatches the user query at the button click / enter key down. 
It fetches data from an open API and populates the page elements with these data
Responsive layout form mobile and desktop.
The page is populated with the city name and several data. The graph displays forecasts that are also present in the scroll div below (on the side for desktop version).
Modals give the user an error message if the user inserts an invalid query.
Redux toolkit was used to improve the redux experience 


appMeteoReduxTest 
is the improved version of the previous app:
- the user writes a city, the router moves to a "select a city page" (the API takes the city name as an imput and returns coordinates of all the cities with that name)
- by clicking on the desired location, the city coordinates are used to do a second call to another API, also the router navigates to another page
- here the page is populated with API data
- text and images were given opacity 1 to improve UX
- meteo icons were substituted with icons from the API
- modal appears also if the user doen't give a query (empty field is sent)


JobSearchingEngine
this progect was created with create-react-app command, hence it needs the npm run start command ( instead of the current npm run dev). Here I applied the old version of the redux store (without toolkits).
Navbar allows navigation among pages, in links>an unexisting page, the user can see how an error page is structured (with manual navigation to home and timed back-route to home)
Log in button is not planned to work
Search: 
    when the user types and presses enter, a series of jobs-companies appear
    if the user click on the heart, the company is added to favourites in the store, the heart gets full and a modal appears, qhich signals that the company was added (eventually I will remove it, it was pure exercice on modals)
    if the user clicks on a filled heart, the company is removed from favourites in the store and the heart goes back to empty
Favourites:
    moving to the favourites page (through navbar or the below-the-title button), a lis of the liked companies appears. The user can remove the company by clicking on the trashbin icon, a modal wich asks for confirmation appears with the name of the company, if the user confirms, the company is removed from the store and the home page heart design goes back to empty
Company:
    By clicking on the link of the company, the user will be redirected on the page which shows the available positions for the selected company. The status of the heart icon is updated according to the current user's likes/dislikes
in the footer section, a pagination (not meant to function) has been inserted 


