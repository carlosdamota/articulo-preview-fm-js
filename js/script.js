const btnOn= document.getElementsByClassName("share-btn")[0];
const btnOff= document.getElementsByClassName("share-btn")[1];
const userInfo = document.getElementsByClassName("user-info")[0];
const shareContainer = document.getElementsByClassName("share-container")[0];

function share() {
  userInfo.classList.toggle("user-info-off");
  shareContainer.classList.toggle("share-container-off");
}

btnOn.addEventListener("click", share);
btnOff.addEventListener("click", share);