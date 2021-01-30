const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

// View Object
const view = {
    
    start: document.getElementById('start'),
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
},
show(element){
    element.style.display = 'block';
},
hide(element){
    element.style.display = 'none';
}
};

// Game Object
const game = {
start(quiz){
    
this.score = 0;
this.questions = [...quiz];
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
view.render(view.question,question);
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
view.render(view.result,'Correct!',{'class':'correct'});
alert('Correct!');
this.score++;
view.render(view.score,this.score);
} else {
view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
    view.show(view.start);
view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}
}
view.start.addEventListener('click', () => game.start(quiz), false);


/*
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );
// View Object
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
addEventListener('keydown',highlight);
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
ulElement.addEventListener('click',highlight);
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}
*/