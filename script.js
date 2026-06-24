function displayTime() {
    document.getElementById('digit-clock').innerText = 'Current Time: ' + new Date();
}

async function guessAge(name) {
    if (name.length === 0) {
        alert('Name cannot be empty');
        return;
    }

    const response = await fetch('https://api.agify.io?name=' + encodeURIComponent(name));
    const result = await response.json();
    $('#response').text('Hi ' + name + ', your age should be ' + result.age);
}

function JQueryAjax() {
    var input = $('#data').val();
    if (input.length === 0) {
        return;
    }

    $.get('/echo.php?data=' + encodeURIComponent(input), function(result) {
        $('#response').text('Response from server: ' + result);
    });
    $('#data').val('');
}

function JQueryAjaxPost() {
    var input = $('#data').val();
    if (input.length === 0) {
        return;
    }

    $.post('/echo.php', { data: input }, function(result) {
        $('#response').text('Response from server: ' + result);
    });
    $('#data').val('');
}

function getEcho() {
    var input = document.getElementById('data').value;
    if (input.length === 0) {
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('response').innerText = 'Response from server: ' + xhttp.responseText;
        }
    };
    xhttp.open('GET', '/echo.php?data=' + encodeURIComponent(input), true);
    xhttp.send();
    document.getElementById('data').value = '';
}

$(function() {
    displayTime();
    setInterval(displayTime, 500);

    var canvas = document.getElementById('analog-clock');
    var ctx = canvas.getContext('2d');
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.9;
    setInterval(function() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }, 1000);

    $.get('https://v2.jokeapi.dev/joke/programming?type=single', function(result) {
        $('#response').text('A Programming Joke of the day: ' + result.joke);
    });
});
