
function myFunction(){
  let profileName = document.getElementById("profile").value;
  let link = `your github profile link ${profileName}`
  let url = `https://www.github.com/${profileName}`;
  if(profileName == ""){
    alert('please enter your username')
  }else{
    document.getElementById('gitprofile').innerHTML = `<a href = "${url}"> ${link} </a>`
  }
}