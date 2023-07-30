# CanvasCorner

## About Canvas Corner
CanvasCorner is a photo-sharing content platform for artists who love to paint. They can share their artwork with many artists and gain inspiration for their future creations of art. As painting is a niche industry to be in, artists can build their network and gain strong connections which will help them to improve their art. This platform is for artists who are beginners, intermediate level or even paint at the professional level of an expert. It is a hub of inspiration for those who like to create with paint.

## Table of Contents
- About 
- Project Goals
- User Stories 
- Design of Website
 - colour scheme
 - WireFrames
- Front-End
- Back-End API Link
- Features
- Technologies I used 
 - Frameworks , Libraries and dependencies 
 - Languages 
 - Tools
- Future Features
- Testing
 - Manual Testing of User Stories
 - Different devices 
 - Browser Compatibility
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
-CRUD functionality for comments, posts and likes
- Bookmark filtering by saved posts
- Responsiveness to allow users navigate website smoothly on multiple devices


## Design


## Libraries, frameworks and dependencies

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


# Bugs


## Deployment