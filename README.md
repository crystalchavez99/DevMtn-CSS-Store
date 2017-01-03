# The Shirt Shop - Mockup

![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/finished.png "Finished Template")

## Setup
Before we get started there are a couple of things we need to do. Start by forking this repository. Once forked be sure to `npm i` or `yarn install` to get the development node_modules (make sure your terminal is in the same directory as the package.json file). The node_modules contains `lite-server` so we can see changes update automatically for us. After you are finished installing, run the following command in your terminal: `npm run lite` (make sure your terminal is in the same directory as the package.json file). You should then see your default browser open up our unfinished template.

## Getting Started
![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/unfinished.png "Unfinished Template")
#### Summary
Yuck! What an ugly template! Today we are going to go over positioning, flexbox, and the box model so that we can achieve the final design. Having a beautiful UI is just as important as a stable UX. To begin we are going to look at the title section using flexbox and positioning.
#### Detail
In my opinion, flexbox is the easiest way to get elements exactly where you want on the page. We are going to start by centering the header and header description. To start using flexbox we use the `display` attribute in our CSS. 
If we look at the index.html we can see that the header lives in a div with id of `container-header` let's open up our `main.css` inside our `styles` folder.
```
#container-header {
	width: 100%;
	height: 100px;
}
```