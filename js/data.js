
document.addEventListener('DOMContentLoaded', function() {
    fetch('js/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data loaded:', data);  // Debugging log
            populateTable('sampleTable', data.samples, ['SampleID', 'Strain', 'Condition', 'Description']);
            populateTable('mappingTable', data.mapping, ['SampleID', 'Total', 'ViewpointOnlyNum', 'ViewpointOnlyPercent', 'CaptureOnlyNum', 'CaptureOnlyPercent', 'GoodPairsNum', 'GoodPairsPercent', 'FailedNum', 'FailedPercent']);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);  // Debugging log
        });
});

function populateTable(tableId, data, columns) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    data.forEach(item => {
        const row = document.createElement('tr');
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.textContent = item[column];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

