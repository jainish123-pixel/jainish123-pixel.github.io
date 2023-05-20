function makeBigger() {
    let text = document.getElementById('userText');
    text.style.fontSize = '4em';
    text.value = capitalizeText(text.value);

    alert("Hello, World!");

}


function fancyStyle() {
    if (document.getElementById('fancy').checked) {
        document.getElementById('userText').style.fontWeight = 'bold';
        document.getElementById('userText').style.color = 'blue';
        document.getElementById('userText').style.textDecoration = 'underline';
    }
}

function capitalizeText(text) {
    let sentences = text.split('. ');
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    return sentences.join('. ');
}

function boringStyle() {
    if (document.getElementById('boring').checked) {
        document.getElementById('userText').style.fontWeight = 'normal';
        document.getElementById('userText').style.color = 'black';
        document.getElementById('userText').style.textDecoration = 'none';
    }
}

function mooFunction() {
    let text = document.getElementById('userText');
    text.value = text.value.toUpperCase();
    let sentences = text.value.split('.');
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + '-Moo';
    }
    text.value = sentences.join('.');
    text.value = replaceSpacesWithUnderscores(text.value); // Add this line to replace spaces with underscores
}

function replaceSpacesWithUnderscores(text) {
    let words = text.split(" ");
    return words.join("_");
}
