# ContactManager
This is a fullstack application for contact manager with Reactjs (front-end) and php7 (back-end). And also, a graph that visualizes the gender distribution based on pie chart using  d3.js library

How use it: 
1- Put the file backend in the folder htdocs of the lampp Server (/opt/lampp/htdocs)

2- Export the file (UserDataBase.sql) in phpmyadmin (http://localhost:2222/phpmyadmin)... here i have changed the default port to 2222!

3- Open Visual studio code in the folder frontend and run "npm start" You will see this interface (Contacts.jpg) (return to the main folder) in browser which show show all contacts that exist in the database.

4- When you click on Add new contact you will see this interface “AddNewContact.jpg”

5- Here you can add new contact with first name, last name, gender and phone number. 

Note that you can not add a phone number that exists in the database

6- finally there is a button in home interface "Gender graph" showing the visualisation of gender of all contacts in the database “PieChartGender.jpg”

Thnak you :) 
