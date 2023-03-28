//   DOM Definitions : 
//  - [ ] Document object model : structured representation of HTML documents  , allows javascript to access HTML elements and Styles to manipulate them .
//  DOM is a tree in which whole structure of HTML of a page is represented and relationships between elements are drawn and with the help of JS we can change text , HTML attributes and even CSS styles . 
//  - [ ] DOM tree structure : A Tree which represents the HTML structure of webpage and its nodes are represented by HTML elements and their classnames and IDs , the tree structure represents a relationship from head to div to its child elements . It can help us to visualize the relationships of whole WEBpage . Root of DOM tree is HTML element .
//  - [ ] Document : First Node of DOM tree . Special object that is entry point to the DOM . example : document.querySelector() ;

// DOM is not part of JS language . It is part of WEB APIs which we have in our browser which we can access in our Javascript Code . WEB Apis are libraries 
// present in our browser for our use . Other WEB Apis : Timers , Fetch API .

// Query selectors is used to access the elements in the DOM 
console.log(document.querySelector('.message').textContent) ;
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13 ;
document.querySelector('.score').textContent = 13 ;

document.querySelector('.guess').value = 13 ;
