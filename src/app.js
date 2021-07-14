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
        entry = {title: yargs.argv.movie, actor: yargs.argv.actor, status: "not watched"};
        movieList.push(entry);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync("./src/netflix.json", stringMovieList);
        console.log("Movie was added to your list:");
        console.log(stringMovieList);
    }
}

add();


const list = () => {
  if (command === "list") {
    console.log("Here is your movie list:");
    console.log(movieList);
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
    console.log("Movie removed from your list:");
    console.log(movieList);
  }
}

remove();

const update = () => {
  if (command === "update") {
    entry = {title: yargs.argv.movie, actor: yargs.argv.actor, status: "not watched"};
    let updateIndex;
    movieList[0].map((movie, index) => {
      if (movie.title === entry.title) { //is erasing actor if not included in command - make sure to keep it in command
        updateIndex = index;
      }
    });
    movieList[0].splice(updateIndex, 1, {title: yargs.argv.movie, actor: yargs.argv.actor, status: "watched"});
    let stringMovieList = JSON.stringify(movieList.flat(1));
    fs.writeFileSync("./src/netflix.json", stringMovieList);
    console.log("Movie status updated:")
    console.log(movieList);
  }
}

update();