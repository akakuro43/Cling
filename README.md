# Cling.js
マウスポインターが近づくと要素がくっ付く動きを実装するスクリプト

## How to Use
### HTML
<div class="js-cling">
  <a class="js-cling-target" href="#">ボタン</a>
</div>

### javascript
let cling = new Cling();
cling.onMouseEnterLeave();
