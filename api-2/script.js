
let apiUrl='https://animechan.vercel.app/api/quotes'
async function processApiData(){
try{
    let response=await fetch(apiUrl)
    let data=await response.json()
    console.log(data)


for(let i=0;i<data.length;i++){
    let result=data[i]

    let raja_container=document.querySelector('#raja')

    let main=document.createElement('div')
    main.classList.add('facts')

    let anime=document.createElement('h2')
    anime.classList.add('title')
    anime.innerText = result.anime
    main.append(anime)

    let character=document.createElement('p')
    character.innerText=`character: ${result.character}`
    main.append(character)

    let quote=document.createElement('p')
    quote.innerText=`quote:${result.quote}`
    main.append(quote)


    raja_container.append(main)
}
}
catch(error){
    console.log("error")
}
}
processApiData()