
var firebaseConfig = {
   apiKey: "AIzaSyD0qZCqALIaSCCNKGyTiAHtXEJ86zE7YCY",
   authDomain: "book-form-49610.firebaseapp.com",
   projectId: "book-form-49610",
   storageBucket: "book-form-49610.appspot.com",
   messagingSenderId: "159994516680",
   appId: "1:159994516680:web:46d512aca060c3a7cf81fd"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



function SubmitUser() {
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;
var name=document.getElementById('name').value;
var state=document.getElementById('state').value;
var city=document.getElementById('city').value;
var address=document.getElementById('address').value;

var state=document.getElementById('state').value;




firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
 alert('User Register successfully');
  var id=firebase.auth().currentUser.uid;
  firebase.database().ref('BookData/'+id).set({
    name:name,
    state:state,
    email:email,
    city:city,
    address: address,



  });
}).catch(function(error){

var errorcode=error.code;
var errormsg=error.message;

});

}
