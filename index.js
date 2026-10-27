const movie=[
    {
    name:"The Batman",
    location:"Gotham City",
    lengthinhours:2.5,
    genres:["Action","Crime","Drama"],
},
{
    name:"The Dark Knight",
    location:"Gotham City",
    lengthinhours:2.32,
    genres:["Action","Crime","Drama"],
},
{
    name:"Inception",
    location:"Various Locations",
    lengthinhours:2.28,
    genres:["Action","Sci-Fi","Thriller"],
},
]
const gothamcitymovie=movie.filter(function(movie){
    return movie.location==="Gotham City"
})
console.log(gothamcitymovie)
const length=movie.filter(function(l){
    return l.lengthinhours>2.3
})
console.log(length)
const crimemovie=movie.filter(function(movie){
    return movie.genres.includes("Crime")
})
console.log(crimemovie)