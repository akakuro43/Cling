# Cling.js
マウスポインターが近づくと要素が寄せ付けられる動作を実装するスクリプト

## How to Use
### HTML
> <div class="js-cling">
>   <a class="js-cling-target" href="#">ボタン</a>
> </div>

### javascript
let cling = new Cling();  
cling.onMouseEnterLeave();
