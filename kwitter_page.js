//YOUR FIREBASE LINKS
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
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}