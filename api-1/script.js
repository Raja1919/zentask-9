
let apiUrl="https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_wiMvM0vSfF56CKi3CTaCuljToY6KXeiYoVypc2PwFwXBQ2f5Q0ExOMpaBpJvYKGM"

async function processApiData(){
  try{
      let response=await fetch(apiUrl)
      let data=await response.json()
      console.log(data)
      
      for(let i=0;i<data.length;i++){
          let result=data[i]
      
          let raja_container=document.querySelector('#raja')
      
          let main=document.createElement("div")
          main.classList.add("cat")
          let bible = document.createElement("h2");
          bible.classList.add("title");
          bible.innerText =result.id
          main.append(bible);
      
          let url=document.createElement('img')
          url.classList.add("image")
          url.src=result.url
          main.append(url)
      
          raja_container.append(main)
      }
  }
  catch(error){
      console.log("error")
  }
}

processApiData()

let filterButton = document.getElementById("filterButton");
let breedFilter = document.getElementById("breedFilter");

filterButton.addEventListener("click", () => {
  let breedID = breedFilter.value;
  apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breeds_ids=${breedID}&api_key=live_wiMvM0vSfF56CKi3CTaCuljToY6KXeiYoVypc2PwFwXBQ2f5Q0ExOMpaBpJvYKGM`;
  processApiData();
});





