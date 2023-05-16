
function sortable(section, onUpdate) {
    var dragEl, nextEl, newPos, dragGhost;

    let oldPos = [...section.children].map(item => {
      item.draggable = true
      let pos = document.getElementById(item.id).getBoundingClientRect();
      return pos;
    });

    function _onDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      var target = e.target;
      if (target && target !== dragEl && target.nodeName == 'DIV') {
        if (target.classList.contains('inside')) {
          e.stopPropagation();
        } else {
          var targetPos = target.getBoundingClientRect();
          var next = (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > 0.7 || (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) > 0.7;
          console.log(
            (e.clientX - targetPos.left)
          )
          section.insertBefore(dragEl, next && target.nextSibling || target);
        }
      }
    }

    function _onDragEnd(evt) {
      evt.preventDefault();
      newPos = [...section.children].map(child => {
        let pos = document.getElementById(child.id).getBoundingClientRect();
        return pos;
      });
      console.log(newPos);
      dragEl.classList.remove('ghost');
      section.removeEventListener('dragover', _onDragOver, false);
      section.removeEventListener('dragend', _onDragEnd, false);

      nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false;
    }

    section.addEventListener('dragstart', function (e) {
      dragEl = e.target;
      nextEl = dragEl.nextSibling;
      
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('Text', dragEl.textContent);

      section.addEventListener('dragover', _onDragOver, false);
      section.addEventListener('dragend', _onDragEnd, false);

      setTimeout(function () {
        dragEl.classList.add('ghost');
      }, 0)

    });
  }

  sortable(document.getElementById('list'), function (item) {
  });