//thay đổi ảnh mỗi khi chọn bức ảnh
const myImage = document.querySelector("img");
myImage.style.width = "300px";
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  
  if (mySrc === "images/small_dog.png") 
    myImage.setAttribute("src", "images/meme_dog.jpg");
  else if (mySrc === "images/meme_dog.jpg")
    myImage.setAttribute("src", "images/ok.jpg"); 
  else 
    myImage.setAttribute("src", "images/small_dog.png");
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome dog lover, ${myName}`;
    }
  }

  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome dog lover, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };