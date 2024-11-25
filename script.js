const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const imagesContainer = document.querySelector(".images-container");

const accessKey = "lDGZhAgk6bAyeVGsd87rDsJ_Joj3iGC0AEK7-yA2XFs";

const loadMoreButton = document.querySelector(".loadMoreButton");

let page = 1;
// function to fetch images using unSplash API
const fetchImages = async (query,page) => {
    // if(pageNo === 1){
    //     imagesContainer.innerHTML = "";
    // }

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accessKey}`;

    // const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;
    
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    
    data.results.forEach(photo => {
        const imageElement = document.createElement("div");
        imageElement.classList.add("imageDiv");
        imageElement.innerHTML = `<img src="${photo.urls.regular}" />`;

        //creating overlay
        const overlayElement = document.createElement("div");
        overlayElement.classList.add('overlay');

        //creating overlay text
        // const overlayText = document.createElement("h3");
        // overlayText.innerHTML = `${photo.alt_description}`;

        // overlayElement.appendChild(overlayText);
        // imageElement.appendChild(overlayElement);

        imagesContainer.appendChild(imageElement);
    });

    // if(data.total_pages === pageNo){
    //     loadMoreButton.style.display = "none";
    // }else{
    //     loadMoreButton.style.display = "block";
    // }

    imageElement.innerHTML = "";

}

//adding EventListener
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(searchInput.value);

    const inputText = searchInput.value.trim();
    if(inputText !== ""){
        page = 1;
        fetchImages(inputText, page)
    }else{
        imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`
    }
});


//adding LoadMore 
// loadMoreButton.addEventListener("click", () => {
//     fetchImages(searchInput.value.trim(), ++page);
// });
