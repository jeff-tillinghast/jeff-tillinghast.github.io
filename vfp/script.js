const generateComment = function()  {
    const comments = [
        {
            text: "Had an awesome night listening to Vote For Pedro play in Seattle!",
            source: "Via Facebook"
        },
        {
            text: "Thank you guys for such a great night. Wish we could have had you play longer. You rocked.",
            source: "Via Facebook"
        },
        {
            text: "We watched the wedding video last week and you were great!",
            source: "The Happy Couple"
        },
        {
            text: "You guys are a blast!",
            source: "Via Facebook"
        },
        {
            text: "Amazing night fellas! Y'all gave us an amazing performance!!",
            source: "Via Facebook"
        },
        {
            text: "Everybody at the wedding commented on how awesome the band was - Vote for Pedro rocks!",
            source: "The Happy Couple"
        },
        {
            text: "Best band ever!!!!!!!!!",
            source: "Via Facebook"
        },
        {
            text: "You guys kill it every time.",
            source: "On the Insta"
        }
    ];
    let arrayIndex = Math.floor(Math.random() * comments.length);
    document.getElementById("text").innerHTML = comments[arrayIndex].text;
    document.getElementById("source").innerHTML = comments[arrayIndex].source;
}

window.onload = function() {
    generateComment();
    document.getElementById("generate").addEventListener('click', generateComment);
}