# (Ping)-Pong

Retro Pong-themed tool that randomly created pairings for a table tennis tournament bracket from a list of names collected from the user. UI built using React and Redux for state management.

## Live site

https://laikathespacedog.github.io/pong/#/

## Setup instructions

To get set up with the project:

1.  Run `git clone git@github.com:LaikaTheSpaceDog/pong.git <desired sub-directory>`. The project files will be cloned to your local repo.
2.  Go to your project directory and run `npm install`. This will install the dependencies in the local node_modules folder.
3.  Run `gulp watch`. This will run the below gulp tasks automatically on save.
4.  Run `npm start`. This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make any edits. You will also see any lint errors in the console.

### Gulp tasks

- Watch task

  _On start up, in your terminal, run:_

  ```
  gulp watch
  ```
  _This will enable live reloading on save and will also run all the listed gulp tasks below_

- sass -> CSS

  _sass to CSS convertion can be run standalone using:_

  ```
  gulp sass
  ```

- minify CSS

  _CSS compression can be run standalone using:_

  ```
  gulp minify-css
  ```
- minify sass
  
  _Run sass and minify-css tigether using:_
    ```
  gulp minify-sass
  ```

## Credits

Animation on landing component based on Pedrobfranca's 'Pong' on codepen: https://codepen.io/Pedrofbfranca/pen/dfphG
Animation on winner component based on Eddie Lin's Pure CSS Fireworks on codepen: https://codepen.io/yshlin/pen/ylDEk
