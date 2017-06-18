var ClozeCard = function(text,cloze) {
  console.log(text);
if(text.indexOf(cloze)!= -1) {
  this.type = 'Cloze'
  this.text = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze,'.....');
  console.log('Cloze Card Created!');
}  else {
  console.log('Cloze not within the Text - Please create a valid input')
}

}

module.exports = ClozeCard;




