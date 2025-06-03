//admin panel toggle logic 
function toggleAdminPanel(){
    const adminPanel = document.getElementById('adminPanel');
    if(adminPanel.style.display == "none"){
        adminPanel.style.display ="block";
    }
    else{
        adminPanel.style.display ="none";
    }
}
//Form submission to update title (you can expand this  to update more content )
const adminForm = document.getElementById('adminForm');
adminForm.addEventListener('submit',function(event){
    event.preventDefault();
    const newTitle = document.getElementById('updateTitle').ariaValueMax;
    document.querySelector('header h1').innerText = newTitle;
});
//Open the admin panel using a secret key or button(simulating login)
document.addEventListener('keydown', function(event){
    if(event.key == 'a' && event.ctrlKey){
        toggleAdminPanel();
    }
})