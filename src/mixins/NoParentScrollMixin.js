export const NoParentScrollMixin = {
  mounted() {
    /** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     *  Prevent Scroll, Wheel and Touch events from bubbling into Body
     *
     *  .no_parent_scroll — set this class to scrollable elements (Like ISI)
     *  .scroll_swallow — set this class to non-scrollable elements (Like Header, Menu, Footer, Side wrapper parts, to prevent body from receiving their scroll events)
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/
    (function () {
      // This variable is used to track TouchMove direction
      let oldY = 0;
      // Find all elements that need the scroll fix
      let noscrollers = document.querySelectorAll(".no_parent_scroll");
      // Only prevent ALL scroll event from bubbling, no additional shit
      let scrollSwallow = document.querySelectorAll(".scroll_swallow");
      // Function to stop propagation
      let prevent = function (e) {
        // console.log(' > prevent', e.target, e.currentTarget, e.type );
        if (
          e.currentTarget.classList.contains("can_scroll_children") &&
          e.currentTarget !== e.target
        ) {
          // console.log('prevent', e.target, e.currentTarget, e.type );
          return;
        }
        // console.log(' + > prevented', e.target, e.currentTarget, e.type );
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
      };
      // Scroll prevent event listeners for scrollable elements
      [].forEach.call(noscrollers, function (el) {
        el.addEventListener("wheel", preventParentScroll);
        el.addEventListener("touchmove", preventParentTouchScroll);
        el.addEventListener("scroll", function (e) {
          e.stopPropagation();
        });
        el.addEventListener("touchstart", function (e) {
          oldY = e.changedTouches[0].clientY;
          e.stopPropagation();
        });
        el.addEventListener("touchend", function (e) {
          oldY = e.changedTouches[0].clientY;
          e.stopPropagation();
        });
      });
      // Scroll prevent event listeners for non-scrollable elements
      [].forEach.call(scrollSwallow, function (el) {
        el.addEventListener("wheel", prevent);
        el.addEventListener("touchmove", prevent);
        el.addEventListener("scroll", prevent);
        el.addEventListener("touchstart", prevent);
        el.addEventListener("touchend", prevent);
      });
      // Mobile scroll override
      function preventParentTouchScroll(e) {
        // console.log('preventParentTouchScroll', e.target );
        e.stopPropagation();
        let deltaY = oldY - e.changedTouches[0].clientY;
        let stop = shouldStop(deltaY, this.scrollTop, this);
        if (stop && e.cancelable) {
          // console.log('+ preventParentTouchScroll FIRE!', stop);
          e.returnValue = false;
          e.preventDefault();
        }
        oldY = e.changedTouches[0].clientY;
      }
      // Desktop scroll override
      function preventParentScroll(e) {
        if (
          ["mobile", "tablet"].indexOf(
            document.body.dataset.elementorDeviceMode
          ) >= 0 &&
          this.classList.contains("nps_desk")
        ) {
          // console.log('>> Skip:');
          return;
        }
        if (
          document.body.dataset.elementorDeviceMode === "desktop" &&
          this.classList.contains("nps_mob")
        ) {
          // console.log('>> Skip2');
          return;
        }
        e.stopPropagation();
        if (shouldStop(e.deltaY, this.scrollTop, this)) {
          e.returnValue = false;
          e.preventDefault();
        }
      }
      // Calculate and decide if we should swallow scroll or not
      // depending on scrollTop and scroll direction
      function shouldStop(deltaY, scrollTop, el) {
        if (deltaY < 0 && scrollTop <= 0) {
          // console.log('Stop 1', deltaY, scrollTop);
          return true;
        } else if (
          deltaY > 0 &&
          Math.ceil(scrollTop) >= el.scrollHeight - el.clientHeight
        ) {
          return true;
        }
        // Should go on
        return false;
      }
    })();
  },
};
