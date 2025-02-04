let topAiring=document.querySelector(".topAiring");

let url="https://api.jikan.moe/v4/top/anime?filter=airing";
const getUrl=async()=>{
    try{
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        data.data.forEach(anime=>{
            topAiring.innerHTML+=`
             <div class="inside">
        <h2>${anime.title}</h2>
        <p>Rating: ${anime.rating}</p>
        <p>${anime.synopsis}</p>
        <img src='${anime.images.jpg.image_url}'>
        </div>
            `
        })


    }catch(error){
        console.log("error occured here",error);
    }
}
getUrl();