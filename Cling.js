var mouse = {
    x: 0,
    y: 0,
}
import {TweenMax, Power2} from "gsap";
export default class Cling {
    constructor(controller) {
      this.isActive = window.isPC
      if(!this.isActive) return
      this.isready = false;
      var _this = this;
      this.clingAnim = {
          onMouseEnter: function(el) {
              _this.isready = true;
              _this.el = el;
              _this.cling = el.querySelector('.js-cling-target');
              _this.w = _this.el.clientWidth;
              _this.h = _this.el.clientHeight;
          },
          onMouseMove: function() {
              var bounds = _this.el.getBoundingClientRect();
              var x = bounds.left;
              var y = bounds.top;
              _this.tx = ((mouse.x - x) / _this.w - 0.5) * 1;
              _this.ty = ((mouse.y - y) / _this.h - 0.5) * 1;
              _this.dx = (_this.tx * 180) * Math.PI / 180;
              _this.dy = (_this.ty * 180) * Math.PI / 180;
              TweenMax.to(_this.cling, 0.2, {
                  // rotation: _this.dx + 'deg',
                  x: _this.dx * 8 + 'px',
                  y: _this.dy * 8 + 'px',
              });
          },
          onMouseLeave: function(el) {
              _this.isready = false;
              if (_this.cling) {
                  TweenMax.to(_this.cling, 0.6, {
                      // rotation: '0deg',
                      x: '0px',
                      y: '0px',
                      ease: Elastic.easeOut.config(1.1, 0.6)
                  });
              }
          },
      }

      this.onMouseMove()
    }

    onMouseMove() {
      if(!this.isActive) return
      let _this = this
      window.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        mouse.x = x;
        mouse.y = y;
        if (_this.isready) {
          _this.clingAnim.onMouseMove();
        }
      })
    }

    onMouseEnterLeave() {
      if(!this.isActive) return
      let _this = this
      Array.from(document.querySelectorAll('.js-cling'), elm => {
        elm.addEventListener('mouseenter', function() {
          _this.clingAnim.onMouseEnter(this);
        })
        elm.addEventListener('mouseleave', function() {
          _this.clingAnim.onMouseLeave(this);
        })
      })
    }
}
