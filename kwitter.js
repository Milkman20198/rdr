function adduser(){
    user_name= document.getElementId("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
    
    
    
}