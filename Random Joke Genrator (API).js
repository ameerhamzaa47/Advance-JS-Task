let random_j=document.getElementById("joke")
let random_b=document.getElementById("btn")

getjoke=()=>{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single")
    .then(val=>val.json())
    .then(item=>{
        random_j.innerHTML=item.joke
    })
}
random_b.addEventListener("click",getjoke)
getjoke()