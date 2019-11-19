window.onload = function () {
    let myImage = this.document.querySelector('img')
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src')
        if(mySrc === 'images/pic4.jpg') {
            myImage.setAttribute('src', 'images/pic3.jpg')
        }else {
            myImage.setAttribute('src', 'images/pic4.jpg')
        }
    }

    function setHeading(Lisa) {
        let myHeading = document.querySelector('h1')
        myHeading.textContent = 'Hello!' + Lisa + '!'
    }

    function setUserName() {
        let myName = prompt('请输入你的名字', 'name')
        localStorage.setItem('name', myName)
        setHeading(myName)
    }

    let storedName = localStorage.getItem('name')

    if(!storedName) {
        setUserName()
    }else {
        setHeading(storedName)
    }

    let myButton = document.querySelector('button')
    myButton.onclick = setUserName
};