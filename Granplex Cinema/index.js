let root = document.documentElement;
let movies = ["1.jpg", "2.jpg", "3.jpg"]
let site = ["site1.jpg", "site2.jpg", "site4.jpg"]
let currentMovie = 0;
let totalMovie = movies.length;

let currentSite = 0;
let totalSite = site.length;

function changeMovie () {
    window.setInterval(function() {
        root.style.setProperty('--movie', 'url(movies/' + movies[currentMovie] + ')');
        currentMovie = currentMovie + 1 % totalMovie;
        if (currentMovie === totalMovie) {
            currentMovie = 0
        }
    }, 3500)
}
changeMovie ()

function changeSite () {
    window.setInterval(function() {
        root.style.setProperty('--site', 'url(assets/' + site[currentSite] + ')');
        currentSite = currentSite + 1 % totalSite;
        if (currentSite === totalSite) {
            currentSite = 0
        }
    }, 3500)
}
changeSite ()
