document.addEventListener('DOMContentLoaded', function() {
    showGroup('all'); // Display all figures on page load
});

function showGroup(group) {
    var figuresContainer = document.getElementById('figuresContainer');
    figuresContainer.innerHTML = '';

    var figures = {
        A: ['JKM139_MA_plot.png', 'JKM139_volcano_plot.png'],
        B: ['corr_004005.png', 'corr_004006.png']
        
    };

    if (group === 'all') {
        for (var key in figures) {
            if (figures.hasOwnProperty(key)) {
                figures[key].forEach(function(figure) {
                    var img = document.createElement('img');
                    img.src = '../images/' + figure;
                    img.alt = figure;
                    img.style.width = '30%'; // Adjust the width as needed
                    figuresContainer.appendChild(img);
                });
            }
        }
    } else {
        var selectedFigures = figures[group];
        selectedFigures.forEach(function(figure) {
            var img = document.createElement('img');
            img.src = '../images/' + figure;
            img.alt = figure;
            img.style.width = '30%'; // Adjust the width as needed
            figuresContainer.appendChild(img);
        });
    }
}
