
## Description
Snake game is a simple snake food eating game

## Dependancies

Any browser that supports JS and HTML 

## TUTORIALS

### Step 1: Draw the canvas using the html

To draw a canvas use the <canvas>  tag . We are going to use a canvas with these inline css properties

#### HTML

```
<body>

<canvas id = "mycanvas" width = "1008px" height ="504px" style = "padding: 1px;margin-left: 10%;border:5px solid #000000;color: blue;background-color: turquoise">

</body>
```

#### JS

```
var ele = document.getElementById('mycanvas');
```

This will draw a simple canvas with border 5px

![Screenshot from 2019-07-20 20-41-14](https://user-images.githubusercontent.com/26246256/61580374-022fa400-ab2f-11e9-99a7-e3d299a6d937.png)

### Step 2: Drawing on the canvas

```
var ele = document.getElementById('mycanvas');
var context = ele.getContext('2d');
```
Consider the snake body part as piece of rectangles so we just need to draw rectangles inside the canvas.

inside the canvas each position is indicated by some x,y coordinates so instead of giving the coordinates directly store each coordinates inside an array this will make the job easy for you. What i was done is to store x coordinates inside an array and store y coordinates in to an another array

```
if(context){
context.fillStyle = 'black'
context.fillRect(array_x[0],array_y[0],20,20);
context.fillStyle = 'red'
context.fillRect(array_x[1],array_y[1],20,20);
context.fillRect(array_x[2],array_y[2],20,20);
context.fillRect(array_x[3],array_y[3],20,20);
}
}
```

In this array_x indicating the x coordinates and array_y is indicating the y coordinates.

![Screenshot from 2019-07-20 20-51-35](https://user-images.githubusercontent.com/26246256/61580486-58e9ad80-ab30-11e9-9481-1a15f6618a86.png)

After this we will get something like in the above picture.

### Step3 : Understanding the key movements

In this step find the arrow key movements and display it in the browsers web console. This is mainly to move the snake to a specified position.

#### JS

``````
document.onkeydown = keyMovements;
function keyMovements(e){ 
e = e || window.event;
if (e.keyCode == '37'){
console.log(“left arrow key is pressed”)
}
else if (e.keyCode == '38'){
console.log(“up arrow key is presssed”)
}
else if(e.keyCode == '39'){
console.log(“right arrow key is pressed”)
}
else if (e.keyCode == '40'){
console.log(“down arrow key is pressed”)
}
``````
By using this code in each arrow key press it will show that which arrow key is pressed in the browsers web console.

### Step 4 : Snake movement

In this step move the snake to any position on a specified key press. This is the point where the snake movement logic comes.

Consider this as the initial stage with the canvas having 25*25 grids and snake having 4 body cells.

![Screenshot from 2019-07-20 21-19-35](https://user-images.githubusercontent.com/26246256/61580871-643ed800-ab34-11e9-8e3c-a0ede1c374da.png)

![Screenshot from 2019-07-20 21-31-22](https://user-images.githubusercontent.com/26246256/61580963-c4824980-ab35-11e9-836f-fdb3ef76c9ac.png)

![Screenshot from 2019-07-20 21-56-55](https://user-images.githubusercontent.com/26246256/61581231-65becf00-ab39-11e9-8e3d-1bc0cf9b374c.png)

![Screenshot from 2019-07-20 21-57-08](https://user-images.githubusercontent.com/26246256/61581232-6a838300-ab39-11e9-8006-70c999776be8.png)

![Screenshot from 2019-07-20 21-57-17](https://user-images.githubusercontent.com/26246256/61581235-6eafa080-ab39-11e9-8913-ce26f9e16bbf.png)

Since we are usign array, finding the positions of the snake is not that much difficult.

#####Up movement

```
<script>
if (e.keyCode == '38'){
up_move = setInterval(upMovement,100);
}
function upMovement(){ 
	context.clearRect(array_x[array_x.length-1],array_y[array_y.length-1],20,20)
	for(var i=array_y.length-1;i>=0;i--){
		array_y[i] = array_y[i-1]
		array_x[i] = array_x[i-1]
	}
	array_x[0] = array_x[1]
	array_y[0] = array_y[1]-22;
	for(var i=0;i<array_x.length;i++){
		context.fillStyle = 'red'
		context.fillRect(array_x[i],array_y[i],20,20)
	} 
return;
}

</script>
```

In this when the up arrow key is pressed it will call an setInterval method

ie the setInterval method calls a function at specified intervals . The setInterval method is continue calling the function until the clearInterval method is called.

In this case when the up arrow key is pressed it will trigger upMovement method by setInterval in each 100 milliseconds. 

Ie in the upMovement method first it will delete the last element then swap all the remaining elements to one position down  and then add the new element(snake head cell position coordinates) to the first position of the array.

In case of upmovement the y coordinate is decreased and the x is constant

```
       array_y[0] = array_y[1]-22;
```

vice versa in other positions there is only a smaller differents in the code.

```
##### down movement    :  The y coordiante is increased and x is constant.
##### left movement    :  The x coordinate is decreased and y is constant.
##### right movement   :  The x coordinate is increased and y is constant.
```


    
