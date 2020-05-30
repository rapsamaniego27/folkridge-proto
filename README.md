<!-- Heading -->
# HTML Webpack

<!-- Description -->
This is my own **boilerplate** in making Front End Projects. I'm currently using **Laravel Mix** and **Webpack**. 

## Installation
```
npm run install
```

## Running the Command
```
npm run watch
```
### Default structure
This boilerplate default setup uses the id `#wrapper` to wrap the `#main` which contains the content and `footer` for site additional info.

<!-- Markup -->
```HTML
<div id="main">
  <div id="wrapper">
    <!-- Content Goes Here -->
  </div>

  <footer>
    <!--Footer info goes here  -->
  </footer>
</div>
```

I'm using flex to have a sticky footer at the bottom. 
Making `#wrapper` as the flex container, `#main` to have a flex 1 and `footer` to shrink.
If you want to make some edits, you may find this in `4-layout/default-structure.scss`.



