
document.getElementById('high-score').textContent = localStorage.getItem("high-score");
var ele = document.getElementById('snake-game-canvas');
if (ele && ele.getContext) {
  var context = ele.getContext('2d');
  var array1 = [];
  var array2 = [];
  array1[0] = 66;
  array2[0] = 154;
  array1[1] = 44;
  array2[1] = 154;
  array1[2] = 22;
  array2[2] = 154;
  array1[3] = 0;
  array2[3] = 154;
  var limit1;
  var score = 0;
  var limit = 1;
  var flag = 0;
  var j = 0;
  var new_flag = df = 0;
  random_check = 0;
  if (context) {
    context.fillStyle = 'black'
    context.fillRect(array1[0], array2[0], 20, 20);
    context.fillStyle = 'red'
    context.fillRect(array1[1], array2[1], 20, 20);
    context.fillRect(array1[2], array2[2], 20, 20);
    context.fillRect(array1[3], array2[3], 20, 20);
  }
}
var x = 0;
var score_bonus;
var element = document.getElementById('bonus')
if (element && element.getContext) {
  var ctx = element.getContext('2d');
}
var left_move;
var right_move;
var up_move;
var down_move;
var key;
var food;
var random_x;
var random_y;
var left = 0, right = 0, down = 0, up = 0;
var i = 0;
var score_bonus;
var right1_move;

function set() {
  right1_move = setInterval(rightMovement, 80);
  function rightMovement() {
    key = 'right'
    context.clearRect(array1[array1.length - 1], array2[array2.length - 1], 20, 20)
    for (var i = array2.length - 1; i >= 0; i--) {
      array2[i] = array2[i - 1]
      array1[i] = array1[i - 1]
    }
    array1[0] = array1[1] + 22;
    array2[0] = array2[1];
    context.fillStyle = 'black'
    context.fillRect(array1[0], array2[0], 20, 20)
    for (var i = 1; i < array1.length; i++) {
      context.fillStyle = 'red'
      context.fillRect(array1[i], array2[i], 20, 20)
    }
    if (array1[0] == 1012) {
      window.alert('your score is ' + score)
      location.reload();
    }
    return;
  }

  random_x = 660;
  random_y = 264;
  context.fillStyle = 'green'
  context.fillRect(random_x, random_y, 20, 20);
  return;
}

document.onkeydown = keyMovements;
function keyMovements(e) {
  e = e || window.event;
  var df = 22;
  console.log(random_x)
  console.log(random_y)
  clearInterval(right1_move)
  if (i == 0) {
    i = 1;
  }

  if (e.key == 'Escape') {
    right = left = down = up = 0;
    clearInterval(left_move)
    clearInterval(down_move)
    clearInterval(up_move)
    clearInterval(right_move)
  }

  function movementClearInterval(firstmove, secondmove) {
    clearInterval(firstmove);
    clearInterval(secondmove);
  }

  if (e.keyCode == '37') {
    up = right = down = 0;
    left = left + 1;
    if (left == 1) {
      movementClearInterval(left_move, right_move)
    }
    movementClearInterval(down_move, up_move)
    if (key == 'right' && left == 1) {
      right_move = setInterval(Movement, 80);
    }
    else if (left == 1) {
      key = 'left'
      left_move = setInterval(Movement, 80);
    }
  }

  else if (e.keyCode == '38') {
    left = right = down = 0;
    up = up + 1;
    movementClearInterval(left_move, right_move)
    if (up == 1) {
      movementClearInterval(down_move, up_move)
    }
    if (key == 'down' && up == 1) {
      down_move = setInterval(Movement, 80);
    }
    else if (up == 1) {
      key = 'up'
      up_move = setInterval(Movement, 80);
    }
  }

  else if (e.keyCode == '39') {
    up = left = down = 0;
    right = right + 1;
    if (right == 1) {
      movementClearInterval(left_move, right_move)
    }
    movementClearInterval(down_move, up_move)
    if (key == 'left' && right == 1) {
      left_move = setInterval(Movement, 80);
    }
    else if (right == 1) {
      key = 'right'
      right_move = setInterval(Movement, 80);
    }
  }

  else if (e.keyCode == '40') {
    up = left = right = 0;
    down = down + 1;
    movementClearInterval(left_move, right_move)
    if (down == 1) {
      movementClearInterval(down_move, up_move)
    }
    if (key == 'up' && down == 1) {
      up_move = setInterval(Movement, 80);
    }
    else if (down == 1) {
      key = 'down';
      down_move = setInterval(Movement, 80);
    }
  }

  function Movement() {
    if (limit % 5 == 0 && flag == 0 && new_flag == 0) {
      bonus_process();
    }
    if (array1[0] == random_x && array2[0] == random_y && random_check == 0) {
      food_process();
    }
    context.clearRect(array1[array1.length - 1], array2[array2.length - 1], 20, 20)
    array_swapping(1);
    if (key == 'right') {
      array1[0] = array1[1] + 22;
      array2[0] = array2[1];
    }
    else if (key == 'left') {
      array1[0] = array1[1] - 22;
      array2[0] = array2[1];
    }
    else if (key == 'down') {
      array2[0] = array2[1] + 22;
      array1[0] = array1[1];
    }
    else if (key == 'up') {
      array1[0] = array1[1]
      array2[0] = array2[1] - 22;
    }
    snake_body_filling();
    if (limit % 5 != 0) {
      new_flag = 0;
    }
    snake_collision();
    boundary_collisions();
    return;
  }
  return;
}

function boundary_collisions() {
  if (array1[0] == 1012) {
    boundary_collision();
  }
  if (array2[0] == -22) {
    boundary_collision();
  }
  if (array2[0] == 506) {
    boundary_collision();
  }
  if (array1[0] == -22) {
    boundary_collision();
  }
  return;
}

function food_eating() {
  var x = Math.floor(Math.random() * (44 - 1 + 1)) + 1;
  var y = Math.floor(Math.random() * (21 - 1 + 1)) + 1;
  random_x = 22 * x + 0;
  random_y = 22 * y + 0;
  food_check()
  limit1 = limit + 1;
  if (limit1 % 5 != 0) {
    context.fillStyle = 'green'
  }
  else {
    context.fillStyle = 'blue'
  }
  context.fillRect(random_x, random_y, 20, 20);
  return;
}
function food_check() {
  for (i = 0; i <= array1.length; i++) {
    console.log(array1[i])
    if (random_x == array1[i]) {
      if (random_y == array2[i]) {
        food_eating();
      }
    }
    else {
      console.log('not existing')
    }
  }
  return;
}

function bonus_point() {
  score_bonus = setInterval(bonus, 80);
  return;
}
function bonus() {
  random_check = 1;
  if (array1[0] == random_x && array2[0] == random_y && random_check == 1) {
    food_eating();
    for (var h = x; h <= 700; h = h + 20) {
      ctx.clearRect(h, 0, 20, 20);
    }
    x = 700;
    array1.length = array1.length + 1;
    array2.length = array2.length + 1;
    score = score + 50;
    limit = limit + 1;
    document.getElementById('score').textContent = score;
  }
  else {
    ctx.clearRect(x, 0, 20, 20);
    x = x + 20;
  }
  if (x == 700) {
    clearInterval(score_bonus)
    console.log('flag is emitted')
    flag = 0;
    new_flag = 1;
    random_check = 0;
    context.fillStyle = 'green'
    context.fillRect(random_x, random_y, 20, 20);
  }
  return;
}

function array_swapping(j) {
  for (var i = array2.length - j; i >= 0; i--) {
    array2[i] = array2[i - 1]
    array1[i] = array1[i - 1]
  }
  return;
}

function snake_collision() {
  for (i = 1; i <= array2.length; i++) {
    if (array2[0] == array2[i]) {
      if (array1[0] == array1[i]) {
        window.alert('your score is ' + score)
        high_scores();
        window.alert('collision detected')
        location.reload();

      }
    }
  }
  return;
}

function high_scores() {
  var high_score = localStorage.getItem("high-score");
  if (high_score != null) {
    if (score > high_score) {
      localStorage.setItem('high-score', score);
      high_score = score;
    }
  }
  else {
    localStorage.setItem('high-score', score);
    high_score = score;
  }
  document.getElementById('high-score').textContent = high_score;
  return;
}

function snake_body_filling() {
  context.fillStyle = 'black'
  context.fillRect(array1[0], array2[0], 20, 20)
  for (var i = 1; i < array1.length; i++) {
    context.fillStyle = 'red'
    context.fillRect(array1[i], array2[i], 20, 20)
  }
  return;
}

function food_process() {
  food_eating();
  array1.length = array1.length + 1;
  array2.length = array2.length + 1;
  score = score + 5;
  limit = limit + 1;
  document.getElementById('score').textContent = score;
  return;
}

function bonus_process() {
  x = 0;
  for (var i = 0; i < 35; i++) {
    ctx.fillStyle = 'red'
    ctx.fillRect(x, 0, 20, 20);
    x = x + 20;
  }
  x = 0;
  flag = 1;
  bonus_point();
  return;
}

function boundary_collision() {
  window.alert('your score is ' + score)
  high_scores();
  location.reload();
  return;
}