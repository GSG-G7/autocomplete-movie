# autocomplete-movie

![](https://i.pinimg.com/originals/e7/38/6b/e7386b0539ec9c24e6acaf7bbf8c3d21.gif)

# Team:
 - Sajeda Ismail
 - Alaa Yasin
 - Fadi Alamassi
 - Imad Shatali

 # Why Do we build this website?
- To let the user search by a movie title and get results, the search bar is autocomplete, so there is an API get request will be sent to our server for evry letter the user enters in the search bar, then, the dropdown list will apear with all movie titles which starts with the letters are currently in the search bar.

# What does this website do?
- It shows the movie details that the user searching for.

# How did we build this website?

- **First,** read the project in details and discussed the requirements
 together
- **Second,** design the file structure for our project (client/server)
- **Third,** drew a layout for the our website
- **Forth,** separated the team into two pairs and started working on creating modules for our sedver side (server, router functions, handlers)
- **Fifth,** create the xhr function to send request to our server and create our own API
- **Sixth,** the same pair wrote the dom and render the response of the xhr request with the DOM file 
- **Seventh,** styled our website
- **Eighth,** refactor our code
- **Ninth,** deploy our server on heroku platform



# User Journey
## When the user enters the website, he will be able to:
- to enter a movie title in the search bar
- each press on the input will send API request to our server and get respons of all titles with start with the user input in a dropdown list
- the user selects one title of the autocomlete suggestions, the click search
- the website shows him the movie details that match his selected option
- in the details he will be able to see
    * movie poster
    * title
    * description
    * rating
    * genre
# npm dependencies
 - [env2](https://www.npmjs.com/package/env2) this manages the env variables, require('env2') => is a functon that we can excute => require('env2')('.env');
 - [request](https://github.com/request/request#readme) this lets us make api requests in the server
