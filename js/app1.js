'use strict';
let newarry=[];
let optionarr=[];

// construct function
function X(value){
  this.title = value.title;
  this.image_url = value.image_url;
  this.description = value.description;
  this.keyword=value.keyword;
  this.horns=value.horns;
  newarry.push(this);
  optionarr.push(this.keyword)
  
}
select();

// X.prototype.render = function(){
//   let temple =$('#template-img').html();
//   let newobj =Mustache.render(temple,this);
//   return newobj;
// }




// git data from json
$.ajax('./data/page-1.json').then((data) => {
  data.forEach((animals) => {
    let title = new X(animals);
     title.render();
     title.optionRender();
     
     // $('main').append(render);
     // if(!optionarr.includes(this.keyword)){
       //   newarry.push(this.keyword);
       // console.log(title);
      });
      // title.render();
    });

// //render  //
// X.prototype.render = function() {
//   let animal = $('#photo-template').clone();
//   animal.find('h2').text(this.name);
//   animal.find('img').attr('src',`${this.src}`);
//   animal.addClass( this.keyword );
//   animal.find('p').text(this.detals);
//   $('main').append(animal);

  
// };
// this.optionRender();


X.prototype.render = function () {
  let tem = $('#template-img').html();
  let card = Mustache.render(tem, this);
  $('main').append(card);
//  title.optionRender();
  // return card;

  
}




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
function select() {
  $('#keyword').children().not(':first-child').remove();
  newarry.forEach(each => {

      $('#keyword').append(`<option> ${each}</option>`);
  });
}
