<h1>FriendFinderApp

1. The app has a survey more of a questionnaire really that asks the user 10 questions. The users answer is based on the Likert Scale (scale of 1 to 5) based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express`, `body-parser` and `path`.

3. The `html-routes.js` file includes two routes:

   * A GET Route to `/survey` which  displays the survey page.
   * And the second page which is the default, a catch-all route that leads to `home.html` displaying you guessed it the home page.

4. The`api-routes.js` file contains two routes:

   * A GET route with the url `/api/friends`. Which is used to display all possible friend match ups.

   * The second a POST route `/api/friends`. Used to handle the incoming survey results and used to handle the compatibility logic.

5. This application's data is saved inside of `app/data/friends.js` as an array of objects.

6. Compatibility by the numbers: the app converts each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
 * The closest match will be the users match with the least amount of difference.

7. Once the patent pending algorithm has had a chance to run the current user's most compatible match up friend, will be displayed in a modal pop-up.
   * The modal displays both the name and picture of the perfect fit or friend match.

# <h4> Heroku App
Check out my App on Heroku
* https://find-friends-km.herokuapp.com/

# <h4>Resources
The formidable form element was tamed with the select enhancer `Chosen`
* David Walsh had a great article that was exremely helpful when creating this app https://davidwalsh.name/jquery-chosen

StackOver Flow's article
* https://stackoverflow.com/questions/15468640/when-is-this-json-structure-getting-converted-to-all-strings

