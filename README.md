# CanvasCorner
[link to project](https://canvas-corner-b9b6c14b7bc7.herokuapp.com/)

![image](https://github.com/damidaramola/canvas-corner/assets/110638513/589fce36-9bb1-4f08-94b4-92a6704fda4f)

## About Canvas Corner
CanvasCorner is a photo-sharing content platform for artists who love to paint. They can share their artwork with many artists and gain inspiration for their future creations of art. As painting is a niche industry to be in, artists can build their network and gain strong connections which will help them to improve their art. This platform is for artists who are beginners, intermediate level or even paint at the professional level of an expert. It is a hub of inspiration for those who like to create with paint.

## Table of Contents
- About 
- Project Goals
- User Stories 
- Design of Website
 - color scheme
 - WireFrames
- Front-End Components 
- Back-End API Link
- Features
- Technologies I used 
 - Frameworks , Libraries and dependencies 
 - Languages 
- Future Features
- Testing
 - Manual Testing of User Stories
- Validation
- Bugs
- Deployment
- Credits

## Project Goals
The Goal for this content-sharing platform project is to allow users(artists) to engage with each other by liking, commenting , bookmarking and posting their art which they choose to share with their peers. This project is meant to be a hub for people with similar interests in art which keeps them inspired to create new work.

Key functionalities :

- User Navigation across each page
- User authentication - sign up/sign in pages 
- Interaction between users by adding posts, likes, comments and followers
- Profiles where users can display their information and posts
- CRUD functionality for comments, posts and likes
- Bookmark filtering by saved posts
- Responsiveness to allow users navigate website smoothly on multiple devices

## User Stories

#### Navigation 
- As a user I can view the landing page so that I can read what the app (CanvasCorner) is about
- As a user I can view a navigation bar from every page so that I can navigate easily between pages
- As a user, I want to be able to navigate to the home page to see a feed of the latest shared content.
- As a logged out user I can see sign in and sign up options so that I can sign in/sign up.

#### Authentication 
- As a user, I want my access tokens to be automatically refreshed to maintain my logged-in status, ensuring a seamless user experience until I choose to log out.
- As a user I can tell if I am logged in or not so that I can log in if I need to
- As a user I can sign in to the app so that I can access functionality for logged in users
- As a user I can create a new account/sign up so that I can access all the features for signed up/registered users

### Profiles 
- As a user I can view other users profiles so that I can see their posts and learn more about them
- As a user, I want to be able to view user avatars, facilitating quick identification of other application users
- As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them
- As a logged in user I can follow and un-follow other profiles so that I can see and remove posts by specific users in my posts feed
- As a logged in user I can update my username and password so that I can change my display name and keep my profile secure


### Posts
- As a user I can view the details of a single post so that I can read more about it
- As a logged in user I can create posts so that I can share my images with other artists.
- As a logged in user I can like a post so that I can show my support for the posts that interest me
- As a logged in user I can unlike a post so that I can change my mind if I no longer am interested in a post
- As a logged in user I can bookmark a post so that I can save the posts that don't want to lose in my feed
- As a logged in user I can un-bookmark a post so that I can change my mind if I no longer am interested in saving a post


### Comments

- As a user I can view the posts page so that I can read the comments about the post
- As a logged in user I can add comments to a post so that I can share my thoughts and feelings about the post
- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
- As an owner of a comment I can edit my comment so that I can fix or update my existing comment

#### General
- As a user I can view feedback messages so that I know when I have successfully completed a task
- form validation: As a user I can be guided with secure form validation so that I can enter the correct inputs into my forms
- As a site owner I can view responsive pages so that I can view the app on all screen sizes and my users can benefit from a good user experience

##### Back to [top](#table-of-contents)


## Design

### Color Scheme
 - The color scheme for this project was mostly different shades of blue to signify inspiration and a free open space for users to post their art pieces and add more color to the website themselves. There are also hints of dark purple and and white in places.

![image](https://github.com/damidaramola/canvas-corner/assets/110638513/1d7e6e6e-bb8c-4e54-be8d-7c61ab282cb0)

- Many of the buttons on each page are also blue.

![image](https://github.com/damidaramola/canvas-corner/assets/110638513/7ae8bda4-bb04-4e37-87e3-1ed15e364900)


## WireFrame

- My wireframes were done during the planning process of my project and have change a lot since I started developing the website for time and change of design decisions.

### landing page
![landing page](https://github.com/damidaramola/canvas-corner/assets/110638513/c194816e-f605-43d8-9f17-0baa3d86be11)

- The difference between my landing page wireframe and my actual landing page is the positioning of the text and images. I also have buttons which link to the sign up and sign in form.

### log in page

![login page](https://github.com/damidaramola/canvas-corner/assets/110638513/83132225-abfb-4920-9011-52af7af485c9)

- My actual log in page and wireframe log in page are ver similar. I have also added an image beside my sign-in form on the real page.

### Display posts page

![view posts page](https://github.com/damidaramola/canvas-corner/assets/110638513/83896400-3898-4114-8029-c118a4ac2e9f)

- My display page in the wire frame has the skill level of each user on the side with the 3 different categories. I have opted to leave that out and have the category just on the post instead. The search bar is much smaller than I made it on the actual website.

### Create post, Edit post

![Create post page](https://github.com/damidaramola/canvas-corner/assets/110638513/e965f758-f68e-43f5-924a-53452baa42e3)

![edit post page](https://github.com/damidaramola/canvas-corner/assets/110638513/4ecedde2-f50c-4f5c-b98e-8d8812f546b5)

- Both the create and edit post pages do not deviate much from the final result.

### Bookmarked posts

![saved-bookmarked pages](https://github.com/damidaramola/canvas-corner/assets/110638513/96105ee9-37b9-4eed-b196-21b73d3356e8)

- The bookmark icon can be seen in this wire frame and the wire frame has 'saved posts' written at the top for users who want to save/bookmark their posts and access them through the bookmarked page of posts.

### Profile Page 

![Profile page](https://github.com/damidaramola/canvas-corner/assets/110638513/f02fd7ed-9cd9-4152-a069-ed7a755a1e98)

- the profile page in the wire frame has a pagination of 3 posts per row which I did not implement in the final result. I have implemented an infinite scroll of the users posts instead.

### Comments

![comments](https://github.com/damidaramola/canvas-corner/assets/110638513/1f8ed4a8-7960-43f9-8e27-b4ec624f6101)

- In the final comments page, the edit and delete icons are stored in a tooltip.

## Features

Here are some of the features added in the website:

### Landing page

![landing home page](https://github.com/damidaramola/canvas-corner/assets/110638513/ed35cb18-73f2-4cb9-9bc8-3756cb692843)

- As a user I can view the landing page so that I can read what the app (CanvasCorner) is about

### Signup

![Signup form](https://github.com/damidaramola/canvas-corner/assets/110638513/27ee7816-019b-40dc-bd93-cb6988d03e9c)

- As a user I can create a new account/sign up so that I can access all the features for signed up/registered users

### Signin

![Sign in page](https://github.com/damidaramola/canvas-corner/assets/110638513/20021879-dbad-4c55-a826-b27500cc01a7)

- As a user I can sign in to the app so that I can access functionality for logged in users


### profile page

![profile page Dan](https://github.com/damidaramola/canvas-corner/assets/110638513/5131d755-b913-466c-8fb1-154e39dc61e2)

- As a user, I have a personal profile page where other users can find me and my art


### Edit Comments

![edit post](https://github.com/damidaramola/canvas-corner/assets/110638513/5c12fe7b-ef69-4b47-92eb-92dff95b8382)

- As an owner of a comment I can edit my comment so that I can fix or update my existing comment


### bookmark

![bookmark feature](https://github.com/damidaramola/canvas-corner/assets/110638513/b80de4a9-88af-431d-8941-62c4df1ecdb8)

- As a logged in user I can bookmark a post so that I can save the posts that don't want to lose in my feed


## Front-End Components

I had 6 different reuseable components in my repository which include,

![components](https://github.com/damidaramola/canvas-corner/assets/110638513/74d5b98e-9437-489f-b4a4-0962a0109078)

-  `<Asset />` - This component displays different versions of the component based on the props to which is passed to it:
e.g.
  - image with src and alt attribute
  - paragraph with a message
- `<Alerts />` - This component displays feedback messages to the user upon performing a CRUD operation e.g. deleting comments.

- `<NavBar />` - This component is reusable and displays the content depending on the login status of the user. For logged in user it shows icon link to the main posts page and 
   user avatar/picture. For those who are not logged in, it displays icon links to sign up or log in instead of the avatar. 

- `<PageNotFound />` - This component is for displaying a 404 graphic error message when the user enters a url which does not exist.

- `<DropdownMenu />` - This component is used to render the dropdown menu which allows user to edit or delete their own posts or comments, and also change their profile password/username.

- `<Avatar />` - This component is used to render profile images in the UI. 

### Back-End API link

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End project can be found [here](https://github.com/damidaramola/canvascorner-drf-api)


## Technologies used :

### Libraries, frameworks and dependencies
- JSON Web Tokens (JWT) - This library was used to prevent unauthenticated users from making extra network requests in order to refresh their access tokens.
- React-Bootstrap 4.6 - This library was used for its components , responsive design and styling
- React Infinite Scroll - Ths=is was used to make the User experience smooth so they can scroll down the page without having to go to the next page or previous page with limited posts
- Axios - Axios is a promise based HTTP and was used too send API requests from the react project to the API.

### Languages
- HTML
- CSS
- Javascript
 - React 17.0.2



## Testing

### Manual testing of user stories


### Navigation
- As a user I can view the landing page so that I can read what the app (CanvasCorner) is about

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
Navigate to [this page](https://canvas-corner-b9b6c14b7bc7.herokuapp.com/) | Paragraph explaining website is present for user to understand the purpose of CanvasCorner | Works as expected |
 
- As a user I can view a navigation bar from every page so that I can navigate easily between pages

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| load any page on website | Navbar is displayed with various navigation links | Works as Expected                                                                                                                            


- As a user, I want to be able to navigate to the home page to see a feed of the latest shared content

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| click 'home' on the navbar | posts with all content is displayed to user | Works as Expected                                                                                                                             

- As a logged out user I can see sign in and sign up options so that I can sign in/sign up.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Navigate to Navbar |  Sign up and Sign in links are displayed in the browser| Works as Expected                                                                                                          

#### Authentication 

- As a user, I want my access tokens to be automatically refreshed to maintain my logged-in status, ensuring a seamless user experience until I choose to log out.

 **Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Sign in to CanvasCorner and do not log out for 24 hours | Once logged in , users can stay signed into the website for 24 hours unless they logout themselves | Works as Expected

- As a user I can tell if I am logged in or not so that I can log in if I need to

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ | 
|If user is not logged in , the landing page is displayed  |  the landing page displays a navbar of only home, signin and sign up links, users can only access sign out, bookmarked, feed and home page when signed in|Works as Expected

- As a user I can sign in to the app so that I can access functionality for logged in users

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click 'Sign in' at the top right of Navbar or click 'Join now!'to be directed to sign in page then sign in | The user is directed to the sign in page once they click on the buttons mentioned in the previous block |Works as Expected

- As a user I can create a new account/sign up so that I can access all the features for signed up/registered users

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click 'Sign up' at the top right of Navbar or click the 'Join now!' button to be directed to sign up page then sign in | The user is directed to the sign up page once they click on the buttons mentioned in the previous block, then prompted to sign in |Works as Expected

## Profiles 

- As a user I can view other users profiles so that I can see their posts and learn more about them

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on the user avatar or name | Redirects to the chosen user profile page and displays their user avatar, number of followers, number of users followed and number of posts |Works as Expected

- As a user, I want to be able to view user avatars, facilitating quick identification of other application users

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Navigate to top left corner of specific users post | The user Avatar is displayed at the top left corner of each post |Works as Expected

- As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on the specific user's avatar | The users post, followers and following count is displayed at the top of the page under the users name |Works as Expected

- As a logged in user I can follow and un-follow other profiles so that I can see and remove posts by specific users in my posts feed

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click follow button on the left of the users profile page | The follow button toggles to un-follow (vice versa) when clicked and following count increments |Experiencing 400 Bad request error


- As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click 3 dots on the right hand corner of your profile page | A box will display options to change password/username which directs user to the correct form for each change |Works as Expected


## Posts

- As a logged in user I can view all the posts by a specific user so that I can catch up on their latest posts

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on home page in NavBar, click on users profile image  | All of Users posts are displayed  | Works as expected                                       

- As a logged in user I can create posts so that I can share my images with other artists.

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click Add post | 'Add Post' link directs the user to a form page where they can create the post, upload an image then post it|Works as Expected

- As a logged in user I can like a post so that I can show my support for the posts that interest me

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on heart icon | heart icon should turn red and like count should increment by 1|Works as Expected                                           

- As a logged in user I can unlike a post so that I can change my mind if I no longer am interested in a post

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on red heart icon  |  heart icon should go from red to empty and like count should decrement by 1 |Works as Expected                

- As a logged in user I can bookmark a post so that I can save the posts that don't want to lose in my feed

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
|  Click on bookmark icon at bottom right of post| Bookmark changes from empty to solid black bookmark icon, post is saved in 'bookmarked' section in NavBar |Works as Expected

- As a logged in user I can un-bookmark a post so that I can change my mind if I no longer am interested in saving a post

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
|Click on solid black bookmark icon |Removes Bookmark and changes from solid black bookmark icon to empty bookmark icon , post is removed from the 'bookmarked' section in NavBar |Works as Expected

## Comments

- As a user I can view the posts page so that I can read the comments about the post

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on post image and scroll down to see comments |User should be directed to a separate page for the single post which displays the comments section  |Works as Expected

- As a logged in user I can add comments to a post so that I can share my thoughts and feelings about the post

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on 'my comment field' , write a comment, then click post button| Comment should save under the post and can be viewed by other users |Works as Expected         


- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on 3 dots on top of the comment then click the delete icon |The comment is removed with a feed back message upon deletion|Works as Expected     

- As an owner of a comment I can edit my comment so that I can fix or update my existing comment

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Click on 3 dots on top of the comment then click the edit icon with pencil image | Comment can be edited where 'save' and 'cancel' buttons are present |Works as Expected

## General

- As a user I can view feedback messages so that I know when I have successfully completed a task

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Delete a post /comment | an alert will pop up telling the user their post comment has been deleted |Works as Expected         

- form validation: As a user I can be guided with secure form validation so that I can enter the correct inputs into my forms

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
|  Don't add an image when creating a post| Validation error will display and prompt user to add an image |Works as Expected       

- As a site owner I can view responsive pages so that I can view the app on all screen sizes and benefit from a good user experience

**Step** | **Expected Result** | **Actual Result**
------------ | ------------ | ------------ |
| Change device screen size using chrome dev tools |  tools	The web functionality remains the same on various screen sizes |Works as Expected                                   

##### Back to [top](#table-of-contents)

## Validation

## CSS
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors. There are a few warnings: 'Due to their dynamic nature, CSS variables are currently not statically checked'

App.module.css 

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Asset.module.css 
![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Avatar.module.css 
![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Comment.module.css 
![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

CommentCreateEditForm.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

DropdownMenu.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Alerts.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

FollowButtons.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Landing.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

SigninSignUpForm.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

DisplayPages.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

NavBar.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Post.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

PostCreateEditForm.module.css
![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

Profile.module.css
![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

ProfilePage.module.css

![validated css](https://github.com/damidaramola/canvas-corner/assets/110638513/09e77c68-3a32-428f-91aa-5b3bd9934565)

## JSX Code Validation

Eslint validation for components
- All components only have 1 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
e.g.

![Alerts.js](https://github.com/damidaramola/canvas-corner/assets/110638513/d6b53a87-c20b-4345-82f5-31c2643efb1d)


Eslint validation for contexts
- All contexts only have 1 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
e.g.
![profileDatacontext](https://github.com/damidaramola/canvas-corner/assets/110638513/f9da30b4-7227-4ff3-a28d-fe0f80127801)


Eslint validation for hooks
- All hooks only have 1 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
e.g.
![useclickoutsidetoggle](https://github.com/damidaramola/canvas-corner/assets/110638513/10b2ba6b-c4a5-4516-b07c-03d59b10f768)


Eslint validation for all .js pages
- All .js page only have 1 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'

## Chrome Dev Tools Lighthouse

Lighthouse was used to test the  accessibility,performance, best practice and SEO of the website. The validation was done for both desktop & mobile.  


# Bugs
| **Bug** | **Fix** |
| ------- | ------- |
|follow/un-follow button isn't working|Unsuccessful fix
| no results found error on feed |Unsuccessful fix.It might be related to follower issue

##### Back to [top](#table-of-contents)

## Deployment

### Forking the GitHub Repository
1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
   
### Making a Local Clone
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click in it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open the command line interface on your computer
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard 
  ```
  $ git clone https://github.com/damidaramola/canvas-corner.git
  ```
7. Press Enter to create your local clone

### How to deploy to heroku

**In your application** 

1. Add your list of requirements  through the terminal - "pip3 freeze --local > requirements.txt"
2. Git add and git commit your changes 

**Log in to heroku**

3. Log in to [Heroku](https://dashboard.heroku.com/apps) or create a new account and log in

4. Click "New" on the top right-hand corner and choose the option Create new app

5. Write your app name - it must be unique

6. Choose Region e.g Europe

7. Click "Create App"

**Once the page of your project opens.**

8. Go to Resources Tab, Add-ons, search and add Heroku Postgres

9. Choose "settings" from the menu on the top of the page

10. Go to section "Config Vars" and click button "Reveal Config Vars". 

11. Add the below variables to the list

    * Database URL will be added automatically
    * Secret_key - This is your djnago secret key (keep it safe!)
    * Cloudinary URL can be obtained from [cloudinary](https://cloudinary.com/) follow the steps on the website to register. Follow the instructions on the website.

**Go back to your code**

12. A Procfile needs to be created in your app
```
web: gunicorn PROJECT_NAME.wsgi
```

13. In settings in your app add Heroku to ALLOWED_HOSTS

14. Add and commit the changes in your code and push to github

**Final step - deployment**

15. Next go to "Deploy" in the menu bar on the top 

16. Go to section "deployment method", choose "GitHub"

17. New section will appear "Connect to GitHub" - Search for the repository to connect to

18. type the name of your repository and click "search"

19. once Heroku finds your repository - click "connect"

20. Scroll down to the section "Automatic Deploys"

21. Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy

22. Click "Deploy branch"

Once the program runs:
you should see the message "the app was successfully deployed"

23. Click the button "View"

## Credits 

Inspiration for this code was taken from the [Moments](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/) walkthrough. 

## Media

Images were taken from [Pexels](https://www.pexels.com/) , [flatIcon.com](https://www.flaticon.com/search?type=icon&search-group=all&word=no+results&license=&color=&shape=&current_section=&author_id=&pack_id=&family_id=&style_id=&type=) and [Google Images](https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1CHBF_enIE924IE924&oq=goo&gs_lcrp=EgZjaHJvbWUqFQgEEC4YQxiDARjHARixAxjRAxiKBTIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIJCAMQIxgnGIoFMhUIBBAuGEMYgwEYxwEYsQMY0QMYigUyBggFEEUYPDIGCAYQRRg8MgQIBxAF0gEIMjk0NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8)  



I would like to thank my Mentor and the Tutors who helped me when I experienced difficulties with my code

##### Back to [top](#table-of-contents)