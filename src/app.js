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
    }
}

add();


const list = () => {
  if (command === "list") {
    console.log(movieList)
  }
}

list();