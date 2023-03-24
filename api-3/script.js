
let apiUrl="https://holidays.abstractapi.com/v1/?api_key=8f15bca841474032b87ff636710c942d&country=IN&year=2020&month=1"
async function processApiData(){
   try{
    let response=await fetch(apiUrl)
    let data=await response.json()
    console.log(data)


    for(let i=0;i<data.length;i++){
        let result=data[i]
        let raja_container=document.querySelector('#raja')

        let main = document.createElement('div');
    main.classList.add('holiday');

    let date=document.createElement("h2")
    date.classList.add("title")
    date.innerText=`DATE: ${result.date}`
    main.append(date)

        let name=document.createElement('p')
        name.innerText=`name : ${result.name}`
        main.append(name)

        let weekday=document.createElement('p')
        weekday.innerText=`weekday : ${result.week_day}`
        main.append(weekday)

        let type=document.createElement('p')
        type.innerText=`type : ${result.type}`
        main.append(type)

        let year=document.createElement('p')
        year.innerText=`year : ${result.date_year}`
        main.append(year)

        let location=document.createElement('p')
        location.innerText=`location : ${result.location}`
        main.append(location)


        raja_container.append(main)

    }
   }
   catch(error){
    console.log("error")
   }

}
processApiData()


