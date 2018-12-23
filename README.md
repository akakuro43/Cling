# Cling.js
マウスポインターが近づくと要素が寄せ付けられる動作を実装するスクリプト

## How to Use
### HTML
```html:sample
<div class="js-cling">
  <a class="js-cling-target" href="#">ボタン</a>
</div>
```
js-cling-target・・・ターゲト要素  
js-cling・・・ターゲットの寄せ付けられる範囲  

### javascript
```html:sample
let cling = new Cling();  
cling.onMouseEnterLeave();
```
