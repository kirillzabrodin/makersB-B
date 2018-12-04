# makersBnB

### Specification

MakersBnB will allow users to create an account and to list multiple spaces available to rent. Each space will have a short description, a name, a price and its availability. Any user can request to hire a space and the owner of the space can then approve it. The space will only become unavailable once confirmed.

### Technologies

- Javascript, Node, React, Next.js
- MongoDB, Mongoose
- Jasmine, Cypress, Travis
- HTML, CSS
- Git

### Installation

You will need Node >= 6.x.x installed in order to install and run the Next.js server. If you need to, use [nvm](https://github.com/creationix/nvm#usage) to easily switch between Node versions.

To install Next.js, type `npm install --save react react-dom next` into the terminal.

Then to run the site locally, type `npm run dev` into the terminal and open [localhost:3000](http://localhost:3000) from your favourite browser.

### User Stories

```
As a user
So that I can become a space renter/owner
I want to be able to sign-up
```
```
As a user
So that I can access my account
I want to be able to log in with my username and password
```
```
As a space owner
So that I can rent my cool space
I want to be able to list my spaces
```
```
As a space owner
So that I find customers
I want to give my space a name, description
```
```
As a space owner
So that I can inform customers of the price
I want my space to list a price
```
```
As a space owner
So that the space is only booked when available
I want the space to list availability
```
```
As a space renter
So that I can select a space to rent
I want to view all the spaces
```
```
As a space renter
So that I can book my selected space
I want to request to hire a space
```
```
As a space owner
So that I can control my space
I want to view any requests and confirm them
```
```
As a space renter
So that I can start planning my holiday in my crib
I want to confirm my booking
```
```
As a space owner
So that I don't double book
I want my space to become unavailable once confirmed by the renter
```

### Setup

To install travis and all the dependencies to run the tests locally just run:
```
npm install --save-dev karma karma-cli karma-jasmine karma-phantomjs-launcher karma-chrome-launcher
```
Local jasmine tests can be run using ```npm test```.

To install Cypress locally:

*"Make sure that you have already run npm init or have a node_modules folder or
package.json file in the root of your project to ensure cypress is installed in
the correct directory."*

Then run the following in the terminal

```
cd /your/project/path

npm install cypress --save-dev

```

To open Cypress, do the following.

```
./node_modules/.bin/cypress open

```

To install MongoDB

Use Homebrew  install over node

```
brew update
brew install mongodb
```
After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running 
```
mkdir -p /data/db
```
*nb: if this doesn't work, try:*
```
mkdir -p \data\db
```
Make sure that the /data/db directory has the right permissions by running:
```
> sudo chown -R `id -un` /data/db
> # Enter your password
```
Run the Mongo daemon, in one of your terminal windows run ```mongod```. This should start the Mongo server.
Run the Mongo shell, with the Mongo daemon running in one terminal, type mongo in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
To exit the Mongo shell run ```quit()```
To stop the Mongo daemon hit ```ctrl-c```

To install manually

[Download here](https://www.mongodb.org/downloads#production)
```
cd Downloads
mv mongodb-osx-x86_64-3.0.7.tgz ~/
```
then follow the same steps as above with regards to creating the new db folder

