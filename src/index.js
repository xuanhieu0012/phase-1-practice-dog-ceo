console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogImageHandler(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogObject => {
        const dogImg= dogObject.message
        const dogContainer = document.querySelector("#dog-image-container")
        dogImg.forEach(dogPic =>{
            const createDogImg = document.createElement('img')
            createDogImg.src = dogPic
            dogContainer.appendChild(createDogImg)

        })
    })
}
dogImageHandler()


function dogBreedHandler(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(dogBreedObject => {iterateDogBreedObj(dogBreedObject)
       // handleDogBreedFilter(dogBreedObject)   
    })
}
function iterateDogBreedObj(dogBreedObject){
    
    const dogBreedArray = Object.keys(dogBreedObject.message)
    
    handlerDogBreedArr(dogBreedArray)
   // handleDogBreedFilter(dogBreedArray)

}

function handlerDogBreedArr(dogBreedArray){
    const dogBreedUl = document.querySelector("#dog-breeds")
   // console.log(dogBreedArray)
        const selectBtn = document.querySelector("#breed-dropdown")

       dogBreedArray.forEach(dog => createDogBreedLi(dog))
            selectBtn.addEventListener('change', e =>{
                dogBreedUl.className = 'hidden'
                   
           const dogFilter = dogBreedArray.filter(dog => dog.charAt(0) === e.target.value)
           dogFilter.forEach(dog =>createDogBreedLi(dog))
         })
       
    
        
    }


function createDogBreedLi(dogBreed){

    const dogBreedUl = document.querySelector("#dog-breeds")
    dogBreedUl.hidden = false
    const dogBreedLi = document.createElement('li')
        dogBreedLi.textContent = dogBreed
       
        dogBreedUl.appendChild(dogBreedLi)

        dogBreedLi.addEventListener('click', e=>{
            e.target.style.color = 'red'
           }
        )
}





dogBreedHandler()