/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

 
// ${item}.forEach(function(item) {
// followersArray.forEach(function(element) {
// axios
  .get(`https://api.github.com/users/epicenedev`)
  .then(data => {
    // const followersArray = [...data.data.followers];
    // console.log("followersArray: ", followersArray);
    // const myArray = [...this.state.courses.map(blabla)];
    // const newCard = createCard(data);
    // document.querySelector(".cards").appendChild(card);
    console.log("Card Info: ", data.data);
  })
// });
  // .catch(err => console.log("REQUEST ERROR:  ", err));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(data) {
  //Create HTML elements
  let card = document.querySelector("div");
       image = document.querySelector("img");
       cardInfo = document.querySelector("div");
       name = document.querySelector("h3");
       username = document.querySelector("p");
       location = document.querySelector("p");
       profile = document.querySelector("p");
       link = document.querySelector("a");
       followers = document.querySelector("p");
       following = document.querySelector("p");
       bio = document.querySelector("p");

  //Place elements
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(link);

  //Set classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username")

  //Add content
  image.src = data.data.avatar_url;
  name.textContent = data.data.name;
  username.textContent = data.data.login;
  location.textContent = `Location: ${data.data.location}`
  profile.textContent = `Profile: ${link}`
  
  //profile.prepend(document.createTextNode("Profile: "));

  link.href = data.data.html_url;
  link.textContent = data.data.html_url;
  followers.textContent = `Followers: ${data.data.followers}`;
  following.textContent = `Following: ${data.data.following}`;
  bio.textContent = `Bio: ${data.data.bio}`;



  return card;
}