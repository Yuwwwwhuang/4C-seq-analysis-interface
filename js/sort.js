function sortTable(columnIndex, tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tr');
    var switching = true;
    var shouldSwitch;
    var i;
    var dir = 'asc';
    var switchCount = 0;

    // Reset all sort icons
    var headers = table.getElementsByTagName('th');
    for (var j = 0; j < headers.length; j++) {
        var icon = headers[j].querySelector('.sort-icon i');
        if (icon) {
            icon.classList.remove('fa-sort-up', 'fa-sort-down');
            icon.classList.add('fa-sort');
        }
    }

    while (switching) {
        switching = false;
        var rowsArray = Array.prototype.slice.call(rows, 1);

        for (i = 0; i < rowsArray.length - 1; i++) {
            shouldSwitch = false;
            var x = rowsArray[i].getElementsByTagName('td')[columnIndex];
            var y = rowsArray[i + 1].getElementsByTagName('td')[columnIndex];

            if (dir === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }

    // Update the sort icon based on the direction
    var currentHeader = headers[columnIndex];
    var currentIcon = currentHeader.querySelector('.sort-icon i');
    if (dir === 'asc') {
        currentIcon.classList.remove('fa-sort', 'fa-sort-down');
        currentIcon.classList.add('fa-sort-up');
    } else {
        currentIcon.classList.remove('fa-sort', 'fa-sort-up');
        currentIcon.classList.add('fa-sort-down');
    }
}
