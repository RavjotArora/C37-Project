class Question{
constructor(){
    this.title = createElement('h1')
    this.input1 = createInput("Enter your name here...");
    this.input2 = createInput("Enter correct option No...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

}

hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
}

display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

    this.input1.position(150,250)
    this.input2.position(350,250)
    this.button.position(550,250)

    this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
    this.question.position(150,80);
    this.option1.html("1. Everyone");
    this.option1.position(150,100);
    this.option2.html("2. Envelope");
    this.option2.position(150,120);
    this.option3.html("3. Estimate");
    this.option3.position(150,140);
    this.option4.html("4. Example");
    this.option4.position(150,160);


    this.button.mousePressed(()=>{
        this.input1.hide();
        this.button.hide();
        this.input2.hide();

        player.name = this.input1.value();
        player.answer = this.input2.value();
        player.update();
        playerCount = playerCount +1;
        player.index = playerCount;
        player.updateCount(player.index);
    });


}




}