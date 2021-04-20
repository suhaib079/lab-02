// 'use strict';


// let mainpic = document.getElementById('maindata');
// let arrObj = []
// $(function(){
//   function X(value){
//     this.name = value.title;
//     this.src = value.image_url;
//     this.detals = value.description;
//     this.keyword=value.keyword;
//     // this.horn=value.horn;
//     arrObj.push(this);
//   }
//   $.ajax('./data/page-1.json').then(jdata=>{
//     // console.log(jdata);
//       jdata.forEach((iteam) => {
//         //console.log(iteam);
//         let newpic = new X(iteam);
//         newpic.render();
//         //    console.log(newpic);
//       });
//     });

//     let newarry=[];
//     X.prototype.render = function () {
//       if (!(newarry.includes(this.keyword))) {
//         newarry.push(this.keyword);
//           $('select').append(`
//           <option>${this.keyword}</option>
//       `);
//       }
//       let PHOTOSHOW = $('#gh').first().clone();
//       PHOTOSHOW.find('h2').text(this.name);
//       PHOTOSHOW.find('img').attr('src', this.src );
//       PHOTOSHOW.find('p').text(this.detals);
//         $('main').append(PHOTOSHOW);
//     }

//     $('select').on('change', function (event) {
//       $('div').hide();

//       $('#maindata').html('<div id="gh"><h2></h2><img src="" alt=""><p></p></div>');

//       let selectValue = event.target.value;
  
//           $.ajax('./data/page-1.json').then(data => {
           
//             data.forEach((item) => {
//           if (item.keyword === selectValue) {
//             let newI = new X(item);
//             newI.render();
//         }
//             })
//         })
//   })
// })



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
  let animal = $('#photo-template').clone();
  animal.find('h2').text(this.name);
  animal.find('img').attr('src',`${this.src}`);
  animal.addClass( this.keyword );
  animal.find('p').text(this.detals);
  $('main').append(animal);

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
