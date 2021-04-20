
'use strict';
let newarry=[];
let optionarr=[];

// construct function
function X(value){
  this.name = value.title;
  this.src = value.image_url;
  this.detals = value.description;
  this.keyword=value.keyword;
  this.horn=value.horn;
  newarry.push(this);
}


    

X.prototype.render = function () {
  let template = $('#template-img').html();
  let k = Mustache.render(template, this);
  let newAnimalDiv = $('<div></div>');
  newAnimalDiv.addClass(`${this.keyword} X`);
  $(newAnimalDiv).append(k);
  $('main').append(newAnimalDiv);
};

















// git data from json
$.ajax('./data/page-1.json').then((data) => {
  data.forEach((animals) => {
    let title = new X(animals);
    // console.log(title);
    title.render();
  });
});

//render  //
  X.prototype.render = function() {
//    let animal = $('#photo-template').clone();
//    animal.find('h2').text(this.name);
//   animal.find('img').attr('src',`${this.src}`);
//    animal.addClass( this.keyword );
//   animal.find('p').text(this.detals);
//    $('main').append(animal);

   this.optionRender();

 };


// render options  //
X.prototype.optionRender=function() {
  let option = `<option>${this.keyword}</option>`;
  if(!optionarr.includes(this.keyword)){
    newarry.push(this.keyword);
    $('.keyword').append(option);
  }
};



//filter//
$( '.keyword' ).change( ( e ) => {
  $( 'div' ).hide();
  let targetValue = e.target.value;
  $( `.${targetValue}` ).show();
  if( targetValue === 'default' ){
     $( 'div' ).show();
  }
} );
