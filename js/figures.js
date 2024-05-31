document.addEventListener('DOMContentLoaded', function() {
    showGroup('all'); // Display all figures on page load
    showMaVolcanoGroup('all'); // Display all MA plot & Volcano plot figures on page load
});

function showGroup(group) {
    var figuresContainer = document.getElementById('figuresContainer');
    figuresContainer.innerHTML = '';

    var figures = {
        A: ['corr_001002.png', 'corr_001003.png', 'corr_002003.png'],
        B: ['corr_004005.png', 'corr_004006.png', 'corr_005006.png'],
        C: ['corr_007008.png', 'corr_007009.png', 'corr_008009.png'],
        D: ['corr_010011.png', 'corr_010012.png', 'corr_011012.png']
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

function showMaVolcanoGroup(group) {
    var maVolcanoFiguresContainer = document.getElementById('maVolcanoFiguresContainer');
    maVolcanoFiguresContainer.innerHTML = '';

    var maVolcanoFigures = {
        JKM139: ['JKM139_MA_plot.png', 'JKM139_volacno_plot.png'],
        JKM179: ['JKM179_MA_plot.png', 'JKM179_volcano_plot.png']
    };

    if (group === 'all') {
        for (var key in maVolcanoFigures) {
            if (maVolcanoFigures.hasOwnProperty(key)) {
                maVolcanoFigures[key].forEach(function(figure) {
                    var img = document.createElement('img');
                    img.src = '../images/' + figure;
                    img.alt = figure;
                    img.style.width = '30%'; // Adjust the width as needed
                    maVolcanoFiguresContainer.appendChild(img);
                });
            }
        }
    } else {
        var selectedMaVolcanoFigures = maVolcanoFigures[group];
        selectedMaVolcanoFigures.forEach(function(figure) {
            var img = document.createElement('img');
            img.src = '../images/' + figure;
            img.alt = figure;
            img.style.width = '30%'; // Adjust the width as needed
            maVolcanoFiguresContainer.appendChild(img);
        });
    }
}
