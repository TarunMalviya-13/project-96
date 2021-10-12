
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB7iXvksQ19YbjjxevMOrWdjuQIsg7yl4w",
      authDomain: "kwitter-a29ea.firebaseapp.com",
      databaseURL: "https://kwitter-a29ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-a29ea",
      storageBucket: "kwitter-a29ea.appspot.com",
      messagingSenderId: "524059690670",
      appId: "1:524059690670:web:f4137bf890ea21bfda4f3f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome -"+user_name+"!";
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding  room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}