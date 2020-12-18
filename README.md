# Examg-UI

This is an exam project.

## Scripts availabes

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

## Description

This app allows user lists all images and for save an image to an user's collection, you can like a picture and comment a picture.

API URL : `https://examg-api.herokuapp.com/`

### API Description

| URL  |Methods | Params | Body content  | Response  | Comments |
|---|---|---|---|---|---|
| /  |  GET  |   |   | Status : 200 - Current Date time from server   |
|__USER__|
| /api/register  |  POST |  | {name: String, email : String, password : String }  | Status : 201 - { user : { _id: String, name: String, email: String, pictures_collection : [{ picsum_id: String, tags : [String] }] }, token : String }  |
|  /api/login  |  POST |   |  {email : String, password : String } | Status : 200 - { user : { _id: String, name: String, email: String, pictures_collection : [{ picsum_id: String, tags : [String] }] }, token : String }  |
|  /api/logout  |  GET |   |  | Status : 200  | Use to clear cookie
|__PICTURES__|
| /api/pictures  |  GET | Optional : page: Number , limit: Number |  | Status : 200 - [{id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [{by : {_id: String, name: String}, comment : String }], createdAt: ISODateString, updatedAt: ISODateString, __v: Number}]  |
| /api/pictures/:id  |  GET | Number |  | Status : 200 - {id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [], createdAt: ISODateString,updatedAt: ISODateString, __v: Number}  |
| /api/pictures/:id/like  |  GET | Number |  | Status : 200 - {id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [{by : {_id: String, name: String}, comment : String }], createdAt: ISODateString,updatedAt: ISODateString, __v: Number}  | Should be authenticated |
| /api/pictures/:id/unlike  |  PUT | Number | | Status : 200 - {id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [{by : {_id: String, name: String}, comment : String }], createdAt: ISODateString,updatedAt: ISODateString, __v: Number}  | Should be authenticated |
| /api/pictures/:id/comment  |  POST | Number | {comment : String} | Status : 200 - {id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [{by : {_id: String, name: String}, comment : String }], createdAt: ISODateString,updatedAt: ISODateString, __v: Number}  | Should be authenticated |
| /api/pictures/:id/comment  |  PUT | Number | {comment : String} | Status : 200 - {id : String, author:String, width : Number, height :Number, url : String, download_url: String, likedBy:[{_id: String, name: String}], _id: String, picsum_id: String, comments: [{by : {_id: String, name: String}, comment : String }], createdAt: ISODateString,updatedAt: ISODateString, __v: Number}  | Should be authenticated |
|__PICTURES COLLECTION__|
|  /api/collection/:picsum_id  |  POST | Number |  | Status : 200 - { user : { _id: String, name: String, email: String, pictures_collection : [{ picsum_id: String, tags : [String] }] }, token : String }  |
|  /api/collection/:picsum_id  |  DELETE | Number |  | Status : 200 - { user : { _id: String, name: String, email: String, pictures_collection : [{ picsum_id: String, tags : [String] }] }, token : String }  |



## What I need to do

__Bugs should be solved :__

* All requests not working, maybe URL error ?
* like not working (when i like a post i don't see it's liked i need to refresh navigator)
* I cannot access to my collection page

__Features needed :__

* add logout function
* add unlike post
* add a comment to a picture
* add pagination
* add to my collection
* remove to my collection
* search into my collection by author name
* add some test of reducers and components