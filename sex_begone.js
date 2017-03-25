let body_text = document.body.innerHTML;
let isSex = false;
const sexWords = [
    'sex', 'nsfw', 'intercourse',
    'extreme sexual action', 'wow that is sex', 'private parts'
];

sexWords.forEach((sex) => {
    isSex = body_text.indexOf(sex) ? true : false;
});

if (isSex) {
    alert('THIS PAGE IS SEXUAL');
}
