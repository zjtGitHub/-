(function () {
  var elements = []

  function Food(x, y, width, height, color) {
    this.x = x || 0
    this.y = y || 0
    this.width = width || 20
    this.height = height || 20
    this.color = color || "red"
  }
  // 初始化食物
  // 通过外部测试代码 传入参数map 
  Food.prototype.init = function (map) {
    //   food_width = this.width + "px"
    //   food_height = this.height + "px"
    //   food_left = parseInt((Math.random() * (map.offsetWidth / this.width)) * this.width)+ "px";
    //   food_top = parseInt((Math.random() * (map.offsetHeight / this.height)) * this.height)+ "px";
    //   food_color = this.color
    //   food_position = "absolute"
    //   $("<div></div>").appendTo($(".map"))
    //     .css({
    //       "backgroundColor": food_color,
    //       "width": food_width,
    //       "height": food_height,
    //       "left": food_left,
    //       "top": food_top,
    //       "position": food_position
    //     })
    //     elements.push(div);
    // }
    remove();

    //创建div
    var div = document.createElement("div");
    //把div加到map中
    map.appendChild(div);
    //设置div的样式
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    //先脱离文档流
    div.style.position = "absolute";
    //随机横纵坐标
    this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";

    //把div加入到数组elements中
    elements.push(div);
  };

  function remove() {
    //elements数组中有这个食物
    for (var i = 0; i < elements.length; i++) {
      var ele = elements[i];
      //找到这个子元素的父级元素,然后删除这个子元素
      ele.parentNode.removeChild(ele);
      elements.splice(i, 1);
    }
  }
  window.Food = Food
}())