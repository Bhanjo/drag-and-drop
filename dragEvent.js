// function allowDrop() {
//     Event.preventDefault();
// }

// function dropItem() {
//     var targetEle = event.target;
//     var id = Evnet.dataTransfer.getData('text');
//     var moveEle = document.getElementById(id);
//     targetEle.before(moveEle);
// }

// function dragStart() {
//     var thisEle = Event.target;
//     var thisId = thisEle.id;
//     // thisEle.classList.add('is-dragging');
//     Event.dataTransfer.setData('text/plain', thisId);
// }

// function dragEnd() {
//     var thisEle = Event.target;
//     // thisEle.classList.remove('is-dragging');
// }

function allowDrop() {
    event.preventDefault();
  }
  
function dropItem() {
    var _targetEle = event.target;
    var _id = event.dataTransfer.getData('text');
    var _moveEle = document.getElementById(_id );
    _targetEle.appendChild(_moveEle);
  }
  
  function dragStart() {
    var _thisEle = event.target;
    var _thisId = _thisEle.id;
    event.dataTransfer.setData('text/plain', _thisId);
  }
  
  function dragEnd() {
    var _thisEle = event.target;
  }