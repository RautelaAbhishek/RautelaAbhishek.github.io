function displayTime() {
    document.getElementById('digit-clock').innerText = 'Current Time: ' + dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
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

function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/';
}

function getCookie(name) {
    var cookieName = name + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return '';
}

function checkVisit() {
    var lastVisit = getCookie('lastVisit');
    var currentVisit = new Date().toLocaleString();

    if (lastVisit === '') {
        $('#visit-message').text('Welcome to my homepage for the first time!');
    } else {
        $('#visit-message').text('Welcome back! Your last visit was ' + lastVisit);
    }

    setCookie('lastVisit', currentVisit, 365);
}

function loadCatImage() {
    $.get('https://api.thecatapi.com/v1/images/search', function(result) {
        if (result.length > 0) {
            $('#cat-image').attr('src', result[0].url);
        }
    });
}

function loadJoke() {
    $.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit', function(result) {
        if (result.type === 'single') {
            $('#joke-box').text(result.joke);
        } else {
            $('#joke-box').html(result.setup + '<br><br>' + result.delivery);
        }
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

$(function() {
    checkVisit();
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

    loadJoke();
    setInterval(loadJoke, 60000);

    $('#new-cat').click(loadCatImage);
    loadCatImage();

    $('#change-background').click(function() {
        var randomColor = getRandomColor();
        document.body.style.setProperty('background-color', randomColor, 'important');
        $(this).text('Background Color: ' + randomColor);
    });
});
