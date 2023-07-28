/* function sortable(section, onUpdate) {
  let dragEl, nextEl, newPos, dragGhost;
  let oldPos = [...section.children].map(item => {
    item.draggable = true;
    let pos = item.getBoundingClientRect();
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
        section.insertBefore(dragEl, next && target.nextSibling || target);
      }
    }
  }

  function _onDragEnd(evt) {
    evt.preventDefault();
    newPos = [...section.children].map(child => {
      let pos = child.getBoundingClientRect();
      return pos;
    });
    dragEl.classList.remove('ghost');
    section.removeEventListener('dragover', _onDragOver, false);
    section.removeEventListener('dragend', _onDragEnd, false);

    if (nextEl !== dragEl.nextSibling) {
      onUpdate(dragEl);
    }
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
    }, 0);
  });
}

sortable(document.getElementById('list'), function (item) {
  // Dodaj dowolne akcje, które mają być wykonane po zakończeniu sortowania.
  // Możesz dostosować tę funkcję do swoich potrzeb.
});

const draggableElement = document.querySelector('.widget[draggable="true"]');

draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged")
); */