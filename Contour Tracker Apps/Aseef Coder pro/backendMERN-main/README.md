# login-backend
 # login-backend
I'have create an exercise tracker application with using the following frameworks:
1. Database -> Mongodb Database -> NoSql Database
2. Server -> Express Server 
3. Modules -> NodeJS Modules
4. React -> React Components using some following Hooks:
    a. useContext() -> React Component with context
    b. useEffect() -> React Component with Effect
5. Design created using wire frame then implement on the html css bootstrap

# Project Title: 
Exercise Tracking Application using MERN Stack.

## API Reference
We created two schemas in our model one for UserModel,js which are used in AuthController and Auth Middleware, respectively and other one are Client.js which are used in AuthController but Client.js Schema are differ to which is used for ClientController and Client Middleware.

# Post request URL onSignup
1. First You need to sign up the user with http://localhost:4000/signup
# Sign Up Data
{
    "email": "test1@gmail.com",
    "password": "test1",
    "username": "test1"
}
Passowrd in encrypted form because we use in our project on jwt authentication.
# Sign up Pics
![signup image1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/1f1fdc35-0c23-48cb-a5ef-ee86a30e68bc)

![signupimage2](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/39c90c8c-94c9-4ef1-8a29-1e4709de46d4)


# Post Request URL on LoginPage
2. Second if your sign in then u can login the page on http://localhost:4000/login
# LoginData
{
    "email": "test99@gmail.com",
    "password": "test99"
}
# Login Pics
![login imgae1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/5431afc5-4b9f-47aa-9c08-475132b9ccb4)

![login image 2](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/1bdebea2-7d61-42f6-84ba-0a0f6171c0f2)


# Get Requeste URL on Home Page 
3. Get All the client record in our database show on postman http://localhost:4000/getclient
# getClient Data Pics
![getclient1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/073b9d3d-2481-4fa4-bc6a-d7cd38e947d5)

In this pic we shows that our client data is also verify and check with my user because we used in jwt authentication.

# Post Request URL on Home Page
4. Post the client data to add our database on http://localhost:4000/addclient
# Post Data
{
    "firstname": "Test25",
    "lastname": "Test25",
    "phone": "01234567890",
    "activity": "bicycle",
    "description": "5 laps in cycle track",
    "durations": 5,
    "image": "testPic25.PNG",
    "user": "64702aae4778fda713cd8742"
}
user object id pass to join both tables.
# addClient Data Pic
![addclient1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/bcc2dd8f-3820-4575-8cec-b1b2a3696797)


# Get request URL by only one unique ID
5. Get the client by its unique ID on http://localhost:4000/getclient/id
# get only one client pics
![getclient id](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/4814c78b-f8c3-4540-84e7-7f7bb3abddfa)


# Put and Patch request by unique id
6. post and patch method using by unique id to update the userdata on http://localhost:4000/updateclient/id
# Post/update the only one user data
{
    "firstname": "Test25",
    "lastname": "Test25",
    "phone": "01234567890",
    "activity": "Hiking",
    "description": "2 steps forward on mountainmountains",
    "durations": 2,
    "image": "testPic25.PNG",
    "user": "64702aae4778fda713cd8742"
}
# Post/update the only one user data pic
![updateclient1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/06e6d3b0-fc8f-41fc-a846-87f0cb200002)


# Delete request by unique id
7. delete the user by some unique id in our database http://localhost:4000/deleteclient/id
# pics of delete client
![deleteclient1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/4f0b312b-d16a-431d-ad7c-d3c812570abc)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file 
MONGO_URL = ""
PORT = ""
TOKEN_KEY=""
set the MONGO-URL, Token Key and PORT number.

## Folder and File Structure in our backend project
![file structure](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/2bb98217-d075-4c26-8281-c70c095fea6b)


1. we create a Controller Folder -> AuthContorller.js and ClientController.js
![image1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/b3da7069-f590-4ae2-a108-b96577445398)
![image1 1](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/63513a99-d426-4fd2-bccf-5dcf97680ba1)


2. create a middleware Folder -> AuthMiddleware.js and ClientMiddleware.js
![image2](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/37bed7b6-067b-4dd1-a51f-675897202511)
![image2 2](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/884b4f0f-75b2-4693-a1cf-7f2e6f9aaf97)


3. create a model folder -> Client.js schema and UserModel.js Schema to set the fields for mongodb database
![image3](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/c6eb28ab-baa1-4c88-84bf-311ae9acf611)
![image3 3](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/541e48a3-1876-483d-a557-206b308436c0)


4. create a Routes folder - > routes define for User and Client to hit the URL.
![image4](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/fe8921e9-555c-44be-896c-06ce16422c70)


5. create a util folder - > SecretToken.js and validareClient.js
![image5 5](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/4b249a7c-e862-423a-9276-cf35ca6a3063)
![image5](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/077ad572-1c30-48f1-b9ca-818a6bcc57b5)


6. index.js file 
![image6](https://github.com/AseefAhmed-coder/backendMERN/assets/130729918/6756dc01-4c89-4959-8ee6-39532081d2dc)


## Author 
Aseef Ahmed

# GITHUB LINK
https://github.com/AseefAhmed-coder

# Guideline
first you need to type npm install then run on npm start command

# Used Node Modules
1. bcrypt
2. bcrypt.js
3. cookie-parser
4. cors
5. dotenv
6. express
7. jsonwebtoken
8. mongoose
9. nodemon
10. validate

# Contact on Email
ahmedaseef6@gmail.com
