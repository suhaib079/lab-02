'use strict';
$.ajax('../data/page-1.json').then(jdata=>{
// console.log(jdata);
  jdata.forEach((iteam) => {
    //console.log(iteam);
    let newpic = new x(iteam);
    newpic.render();
    //    console.log(newpic);
  });
});
function x(value){
  this.name = value.title;
  this.src = value.image_url;
  this.detals = value.description;
  this.keyword=value.keyword;
  this.horn=value.horn;
  // newarry.push(this.keyword);
}
x.prototype.render = function(){
  $('#gh').append(
    `<h2> ${this.name}</h2>`
  );
  $('#gh').append(
    `<img src="${this.src}"</img>`
  );
  $('#gh').append(
    `<p>${this.detals}"</p>`
  );
};
// let newarry=[];
// data.forEach(val=>{
//     if(!newarry.includes(val.keyword)){
//         newarry.push(val.keyword);
//         // $('select').append(`<option> ${val.keyword}</option>`)
//     }
// }
let newarry=[];
$('#select').on('change',function(event){
  $('div').hide();
  let slectedItem= event.target.value;
  //   newarry.push(slectedItem);
  console.log(slectedItem);
  newarry.forEach(val=>{
    if(val.keyword=== slectedItem ){
      let newdata= new x(val);
      let render1= newdata.render();
      $('#span').append(render1);
      newarry.push(render1);
    }
  });
});