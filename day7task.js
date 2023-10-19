// Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",'true');
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var asia = result.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
console.log(asia);
}

// // Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",'true');
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var pop = result.filter((element1)=>{
            return element1.population<200000;
    });
    console.log(pop);
    }

// // Print the following details name, capital, flag using forEach function

var req = new XMLHttpRequest();
req.open ("GET","https://restcountries.com/v3.1/all",'true');
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    result.forEach((element2) => {
        console.log(element2.name,element2.capital,element2.flags);
    });
}

// // Print the total population of countries using reduce function

var reqs = new XMLHttpRequest();
reqs.open("GET","https://restcountries.com/v3.1/all",'true');
reqs.send();
reqs.onload = function(){
    var result = JSON.parse(reqs.response);
    var red = result.reduce((acc,element2)=>{
        return acc+element2.population;
    },0)
    console.log(red);
}

// // Print the country which uses US Dollars as currency.

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    let realanswer = answer.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    console.log(realanswer.length, realanswer[0].currencies)
}





