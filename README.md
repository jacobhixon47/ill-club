# illclub

#### By: _Jacob Hixon_

This README outlines the details of collaborating on this Angular 2 application.

'illclub' is a mock club management website, the framework of which could be tailored to meet the member-management needs of any team, club, or other organization.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)

## Installation

* `git clone <repository-url>`
* `cd <repository-name>`
* `npm install`
* `bower install`
* You will also need to:
    * create a database on [firebase](https://firebase.google.com)
      * go into database/rules section of your firebase console and change read and write to `true`.
    * in the authentication page of your console, click on `web setup`
    * create a file in your project directory `/src/app/api-keys.ts`
    * in your `api-keys.ts` file, copy the info from the `web setup` page on firebase in this format:
      `export class masterFirebaseConfig = {
        apiKey: <your-api-key>,
        authDomain: <your-auth-domain>,
        databaseURL: <your-database-URL>,
        storageBucket: <your-storage-Bucket>
        }`
* this should complete the setup

## Running / Development

* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


This file is part of (illclub).

  (illclub) is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  (illclub) is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with the (illclub). If not, see <http://www.gnu.org/licenses/>.

Copyright (c) 2017 **_Jacob Hixon_**
