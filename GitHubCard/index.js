/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const instructors = [
  "epicenedev",
  "blevs",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];


// ${item}.forEach(function(item) {
instructors.forEach(instructor => {
axios
  .get(`https://api.github.com/users/${instructor}`)
  .then((res) => {
    console.log("Card Info: ", res.data);
    const cards = document.querySelector(".cards");
    const card = createCard(res.data);
    cards.append(card);
  })
  .catch(err => console.log("REQUEST ERROR:  ", err));
    
});
// axios.get(`https://api.github.com/epicene/followers`)
//   .then(res => res.data.slice(0, 3))
//   .then(followers => {
//     followers.forEach(follower => {
//       axios.get(`https://api.github.com/users/${follower.login}`)
//         .then(res => {
//           const card = createCard(res.data);
//           cards.append(card);
//         });
//     });
//   });

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
function createCard(user) {
  //Create HTML elements
  let card = document.createElement("div");
  let image = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let username = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let link = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

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
  

  //Set classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username")

  //Add content
  image.src = user.avatar_url;
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location || "Nowhere"}`;
  profile.textContent = `Profile: `;

  link.href = user.html_url;
  link.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio||"none"}`;
//MUST PLACE AFTER ADDING TEXT TO PARENT NODE OR IT WILL OVERWRITE
  profile.appendChild(link);

  return card;
}