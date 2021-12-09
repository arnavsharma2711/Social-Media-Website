# Relier - Social Media Website

Relier is a social media website bulit using MERN stack.
Relier is a real-world social media app which utilize REST API for login, register, and all CRUD operations along with a responsive messaging website which use react hooks, sending a private message with socket io, and saving data to MongoDB.

## Deployment

The link will  be available soon.

## Screenshot

- Home Page 
![Home Page](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/1.Home%20Page.png?raw=true "Home Page ")
- Adding New Post 
![Adding New Post ](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/2.New%20Post.png?raw=true "Adding New Post ")
- Profile Page 
![Profile Page](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/3.Profile%20Menu.png?raw=true "Profile Page")
- Login Page 
![Login Page](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/4.Login%20Page.png?raw=true "Login Page")
- Register Page 
![Register Page](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/5.Register%20Page.png?raw=true "Register Page")
- Mesesnger
![Mesesnger](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/6.Mesesnger%20Menu.png?raw=true "Mesesnger")
- Chats 
![Chats](https://github.com/arnavsharma2711/Social-Media-Website/blob/main/Screenshot/7.Chats.png?raw=true "Chats")

## Prerequisite
* You must have [node.js](https://nodejs.org/en/download/) installed in your system.

* Add a .env file in the api/ and enter the following line according to your database.
```bash
MONGO_URL = mongodb+srv://<username>:<password>@cluster0.nb0sm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
>Replace **< password >** with the password for the **< username >** user and username from with your username.  Replace **myFirstDatabase** with the name of the database that connections will use by default.  Ensure any option params are  [URL encoded](https://dochub.mongodb.org/core/atlas-url-encoding).

* Add a .env file in the client/ and enter the following line according to your database.

```bash
REACT_APP_PUBLIC_FOLDER = http://localhost:8800/images/
```
* Open api, client and socket folder separately and run the following command in command promt for every folder to add the nessarcy node_modules.
```bash
npm install
```
or
```bash
yarn install
```
## Add data to the database
Install Postman and import the **social.postman_collection.json** file and add data useful for first time login.
>You need to keep running the server.
## How to access the project
-   Open api, client and socket folder separately and run the following command in command promt for every folder.
```bash
yarn start
```

## Synopsis of the project

The data will added soon.

## References
* Node.js->\
https://nodejs.org/en/docs/
* React.js->\
https://reactjs.org/docs/getting-started.html
* React Router->\
https://reactrouter.com/
* Express->\
https://expressjs.com/en/starter/installing.html
* MonogoDB->\
https://docs.mongodb.com/
* Material UI->\
https://mui.com/
* Multer->\
https://github.com/expressjs/multer#readme
* Socket.io->\
https://socket.io/docs/v4/
* timeago.js->\
https://github.com/hustcc/timeago.js#readme


