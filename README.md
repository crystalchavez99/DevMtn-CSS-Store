# The Shirt Shop - Mockup

![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/finished.png "Finished Template")

## Setup
Before we get started there are a couple of things we need to do. Start by forking this repository. Once forked be sure to `npm i` or `yarn install` to get the development node_modules (make sure your terminal is in the same directory as the package.json file). The node_modules contains `lite-server` so we can see changes update automatically for us. After you are finished installing, run the following command in your terminal: `npm run lite` (make sure your terminal is in the same directory as the package.json file). You should then see your default browser open up our unfinished template.

## Getting Started - The Header
![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/unfinished.png "Unfinished Template")
#### Summary
Yuck! What an ugly template! Today we are going to go over positioning, flexbox, and the box model so that we can achieve the final design. Having a beautiful UI is just as important as a stable UX. To begin we are going to look at the title section using flexbox and positioning.
#### Detail
In my opinion, flexbox is the easiest way to get elements exactly where you want on the page. We are going to start by centering the header and header description. To start using flexbox we use the `display` attribute in our CSS. 
If we look at the `index.html` we can see that the header lives in a div with id of `container-header` let's open up our `main.css` inside our `styles` folder.
```css
#container-header {
	width: 100%;
	height: 100px;
}
```
If we add an attribute of `display: flex;` We will then see all the elements shift to the same line and our hamburger menu get stretched out. When examining the elements we can see that the width is the exact width of the element, however it gave the height of the container to all the elements `(#container-header)`. This is what caused our hamburger menu to get stretched out. Flex has certain attributes that allow us to manipulate how the elements are arranged in our new "flex box" `(#container-header)`.

Let's return to our `main.css` file and checkout what `flex-direction` and `align-items` can do for us. If we add the attribute `flex-direction: column;` to `#container-header` we see our elements stack on top of each other again, however they aren't in the center. We can move them to the center using `align-items: center`. 

![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/center-header.png "Center Header")
#### Code
```css
#container-header {
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
```
## Step 2 - Using positioning with flexbox
#### Summary
Sweet, we got our header in the center of the screen with three lines of code! But what about our menu? Flexbox is forcing it into the next row. We can use positioning along side flexbox to get the perfect UI we are going for. In this step we are going to get our hamburger menu to be in the upper-right of our page.

#### Detail
If we take a look in our `index.html` we can see our menu has an ID of `#menu-icon`, let's make some changes in our `main.css` file. With the attribute of `position` we can assign `absolute` to "break" free of flexbox!

Once `position: absolute` is assigned we have the freedom of placing the element where-ever, down to the exact pixel! We can do this using the attributes of `top, right, left, bottom`. Knowing this, how could we get our hamburger menu 30 pixels from the top and right of our page?

![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/positionMenu.png "Position Menu")

#### Code
```css
#menu-icon {
	width: 35px;
	position: absolute;
	top: 30px;
	left: 30px;
}
```

## Step 3 - Flexbox centering vertically & horizontally
#### Summary
Flexbox gives us the freedom to not only center horizontally but also vertically. Our menu on the right has great spacing from the borders of the webpage, however now our header appears too close to the border. 

#### Detail
Using the `align-items` attribute allows us to get the horizontal center, let's take a look at the `justify-content` attribute to get our vertical center.

![alt text](https://github.com/j-lemire/DevMtn-CSS-Store/blob/master/readme/justifyContent.png "Justify Content")

#### Code
```css
#container-header {
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
```

## Step 4 - Box model
#### Summary
You can consider the box model as the model for every element that is on your page. There is essentially a "box" surronding each element and the "box" has multiple "layers." Take a look at the following picture:
