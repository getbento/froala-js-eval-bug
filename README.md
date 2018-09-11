# froala-js-eval-bug
Run `yarn` to install dependencies
Run `yarn start` to start webpack dev server

## Steps To Reproduce:
1. Open code editor view within Froala Editor.  
2. Add a script tag.  
3. Click "Hide Froala" to trigger an unmount.  

Before fully unmounting, the script tag is executed.
