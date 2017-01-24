# The Shirt Shop - Mockup

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/1.png "Finished Template")

## Setup
Before we get started there are a couple of things we need to do. Start by forking this repository. Once forked be sure to `npm i` or `yarn install` to get the development node_modules (make sure your terminal is in the same directory as the package.json file). The node_modules contains `lite-server` so we can see changes update automatically for us. After you are finished installing, run the following command in your terminal: `npm run lite` (make sure your terminal is in the same directory as the package.json file). You should then see your default browser open up our unfinished template.

## Step 1 - The Header
![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/2.png "Unfinished Template")
#### Summary
Yuck! What an ugly template! Think about this site from a user's perspective, would you take this website seriously? UI is extremely important, sometimes even more important than the functionality of the website. Today we are going to go over positioning, flexbox, and the box model so that we can achieve the final design. To begin we are going to look at the title section using flexbox and positioning.
#### Detail
In my opinion, flexbox is the easiest way to get elements exactly where you want on the page. We are going to start by centering the header and header description. To start using flexbox we use the `display` attribute in our CSS. 
If we look at the `index.html` we can see that the header lives in a div with id of `container-header` let's open up our `main.css` inside our `styles` folder.
```css
#container-header {
	width: 100%;
	height: 100px;
}
```
If we add an attribute of `display: flex;` We will then see all the elements shift to the same line and our hamburger menu ( the three horizontal black lines ) gets stretched out. When examining the elements we can see that the width is the exact width of the element, however it gave the height of the container to all the elements `(#container-header)`. This is what caused our hamburger menu to get stretched out. Flex has certain attributes that allow us to manipulate how the elements are arranged in our new "flex box" `(#container-header)`.

Let's return to our `main.css` file and checkout what `flex-direction` and `align-items` can do for us. If we add the attribute `flex-direction: column;` to `#container-header` we see our elements stack on top of each other again, however they aren't in the center. We can move them to the center using `align-items: center`. 

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/3.png "Center Header")
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

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/4.png "Position Menu")

#### Code
```css
#menu-icon {
	width: 35px;
	position: absolute;
	top: 30px;
	right: 30px;
}
```

## Step 3 - Flexbox centering vertically & horizontally
#### Summary
Flexbox gives us the freedom to not only center horizontally but also vertically. Our menu on the right has great spacing from the borders of the webpage, however now our header appears too close to the border. 

#### Detail
Using the `align-items` attribute allows us to get the horizontal center, let's take a look at the `justify-content` attribute to get our vertical center.

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/5.png "Justify Content")

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

![alt text](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/boxModel.png "Box Model")

The blue represents the current `width` and `height` of the selected element, essentially what you see on the screen. The very next layer is called the `padding`, the `padding` is the spacing between the element and its `border`. `Padding` is useful if you have a container and you do not want elements inside the container to press up against its `border`. After the `padding` is the `border` and then the `margin`. If an element has no `margin`, the element "ends" at its `border` which can be visible if you choose. But say you have two elements pushed up against each other at their borders, that's where `margin` comes in to play. `Margin` allows us to specify a spacing from the `border` out.

For example, if you have a square (25 by 25 pixels) on your dom, you can apply a `margin-right` of 20px. This takes your element and makes it 45px by 25px, however you do not see the additional 20px added on to the element. `Margin` helps, in this case, to make sure that no element can get within 20px to the right of the element. 

Knowing this we are going to put spacing between the header and the header description using `margin` to get a cleaner UI.

#### Detail
Let's take a look in our `index.html`, there are multiple ways to solve this problem, we could either add a `margin-bottom` to the header or a `margin-top` to the header description. Since the header description already has an `ID` (`#header-description`), let's go with adding a `margin-top` of 15px.

Once we've added `margin-top: 15px` notice how our header is now extremely close to the border of the browser again. The reason this is happening is because the height of our header container is only 100px and we are running out of space. Our flexbox property `justify-content` is vertically centering all the elements in the container (`#container-header`). Because flexbox is vertically centering based on height, we can set the height of `#container-header` to 130px to achieve the spacing again.

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/6.png "Spacing")

#### Code
```css
#container-header {
	width: 100%;
	height: 130px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#header-description {
	margin-top: 15px;
}

```

## Step 5 - Challenge
#### Summary
In this step there won't be a detail section. Try to use only flexbox and margins to achieve the following picture. To clarify, we are trying to get the products to be horizontally centered with a 5px margin on the right and left. Hint: When you do not specify a `flex-direction`, `align-items` and `justify-content` are inversed.

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/7.png "Challenge")

#### Solution
[Click Me For The Solution](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/1.md)

## Step 6 - Finishing Touches - Challenge
#### Summary
Our template is almost finished. If we take a look at the information of the products they are squished together and also our prices are not on the same line. Using margins how could we achieve 5px spacing between each element ( The product image, header, description, and price ). There is no need for a `margin-bottom` on the prices. The trickiest part of this challenge is getting the prices on the same line WITHOUT css. How could we edit the HTML to achieve this?

HINT: With our current styles the `.product-container` is in a `flex-direction` of `column`, so it will put each element on top of each other...

![png](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/1.png "Finished Template")

#### Solution
[Click Me For HTML Solution](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/2.md)

[Click Me For CSS Solution](https://github.com/devlemire/DevMtn-CSS-Store/blob/master/readme/3.md)
