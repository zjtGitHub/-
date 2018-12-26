(function () {

  var elements = []

  function Snake(width, height, direction) {
    this.width = width || 20
    this.height = height || 20
    this.direction = direction || "right"
    this.body = [{
        x: 3,
        y: 2,
        color: "red"
      },
      {
        x: 2,
        y: 2,
        color: "orange"
      },
      {
        x: 1,
        y: 2,
        color: "orange"
      }
    ]
  }

  Snake.prototype.init = function (map) {
    remove();
    for (var i = 0; i < this.body.length; i++) {
      // 每个数组元素都是一个对象
      var obj = this.body[i]
      var div = document.createElement("div")
      map.appendChild(div)
      // 设置样式
      div.style.position = "absolute"
      div.style.width = this.width + "px"
      div.style.height = this.height + "px"
      div.style.left = obj.x * this.width + "px"
      div.style.top = obj.y * this.height + "px"
      div.style.backgroundColor = obj.color
      // 把div放到数组里 为了后面删除
      elements.push(div)
    }
  }

  Snake.prototype.move = function (food, map) {

    var i = this.body.length - 1
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    // 判断方向
    switch (this.direction) {
      case "right":
        this.body[0].x += 1
        break
      case "left":
        this.body[0].x -= 1
        break
      case "bottom":
        this.body[0].y += 1
        break
      case "top":
        this.body[0].y -= 1
        break
    }
    var headX = this.body[0].x * this.width;
    var headY = this.body[0].y * this.height;
    //判断小蛇的头的坐标和食物的坐标是否相同
    if (headX == food.x && headY == food.y) {
      //获取小蛇的最后的尾巴
      var last = this.body[this.body.length - 1];
      //把最后的蛇尾复制一个,重新的加入到小蛇的body中
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      });
      //把食物删除,重新初始化食物
      food.init(map);
    }
  }


  // 每次动都要删除之前小蛇
  function remove() {
    var i = elements.length - 1
    for (; i >= 0; i--) {
      // 遍历子元素 从子元素的父元素中找到这个子元素然后删除
      var ele = elements[i]
      // 地图上删除 数组中也要删除
      ele.parentNode.removeChild(ele)
      elements.splice(i, 1);
    }
  }

  // 把snake暴露给外部
  window.Snake = Snake
}())