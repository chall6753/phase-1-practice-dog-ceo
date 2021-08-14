console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//fetch API data for images
fetch(imgUrl)
.then(res => res.json())
.then(loadImagesOnLoad)

//fetch API data for breed list
fetch(breedUrl)
.then(res => res.json())
.then(loadListOnLoad)
.then(sortByFirstLetter)


//add image url's to DOM when page loads
function loadImagesOnLoad(res){
    let imageData = res
    let i = 0
    //runs through each url in the array
    while(i < imageData.message.length){
        let img = document.createElement('img')
        document.getElementById('dog-image-container').append(img)
        img.src = imageData.message[i]
        i += 1
    }
}

function loadListOnLoad(res){
    let breedList = res
        let i = 0
    // runs through each dog breed in the array
    for (let breed in breedList.message){
        let li = document.createElement('li')
        li.innerText = breed
        document.getElementById('dog-breeds').append(li)      
    }
}

//added blanket event listeners for click, redirect to colorChange is click was on a LI
document.addEventListener('click', function(event){
    if (event.target.tagName === 'LI'){
        colorChange(event)
    } else if (event.target.id === 'breed-dropdown') {
        sortByFirstLetter()
    }
})

//changes li to blue when clicked on
function colorChange(event){
    event.target.style.color = 'blue'

}
//takes letter from dropdownlist and only displays breeds that start with that letter
function sortByFirstLetter(){
    breedList = document.getElementById('dog-breeds').getElementsByTagName('li')
    letter = document.getElementById('breed-dropdown').value 
    console.log(letter)
    for (let i = 0; i <  breedList.length; ++i ){
        if (breedList[i].innerText[0] === letter){
            breedList[i].hidden = false
        } else{
            breedList[i].hidden = true
        }    
    }
}

