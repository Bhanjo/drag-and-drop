function allowDrop() {
    event.preventDefault();
}

function dropItem() {
    var dropele = event.target;
    var dropid = event.dataTransfer.getData('text');
    var moveEle = document.getElementById(dropid);
    dropele.appendChild(moveEle);
}

function dragStart() {
    var selectEle = event.target;
    var selectId = selectEle.id;
    event.dataTransfer.setData('text', selectId);
}