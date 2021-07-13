const yargs = require('yargs');
const command = process.argv[2];
const fs = require('fs');
let movieList = [];

try {
    let tempJson = fs.readFileSync("./src/netflix.json");
    let tempNetflix = JSON.parse(tempJson);
    movieList.push(tempNetflix);
  } catch (error) {
    movieList = [];
  }

const add = () => {
    if (command === "add") {
        entry = {title: yargs.argv.movie, actor: yargs.argv.actor};
        movieList.push(entry);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync("./src/netflix.json", stringMovieList);
        console.log(stringMovieList);
        console.log("added to your movie list");
    }
}

add();


const list = () => {
  if (command === "list") {
    console.log(movieList);
    console.log("here is your movie list");
  }
}

list();

const remove = () => { 
  if (command === "remove") {
    entry = {title: yargs.argv.movie, actor: yargs.argv.actor};
    let deleteIndex;
    movieList[0].map((movie, index) => {
      if (movie.title === entry.title) { //note to self: make sure it's entry.title so movie.title isn't always false
        deleteIndex = index;
      }
    });
    movieList[0].splice(deleteIndex, 1);
    let stringMovieList = JSON.stringify(movieList.flat(1));
    fs.writeFileSync("./src/netflix.json", stringMovieList);
    console.log(movieList)
  }
}

remove();

