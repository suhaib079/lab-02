'use strict';

let page2keywork = [];
let allImg = [];
let allImg2 = [];
let page1keyword = [];
//getting data1
$.ajax('./data/page-1.json')
    .then(data => {
        data.forEach(element => {
            let newImage = new X(element);
            let render = newImage.render();
            $('main').append(render);
            if (!page1keyword.includes(element.keyword)) {
                page1keyword.push(element.keyword);
            }

        });
        select();

    });

//getting data2
$.ajax('./data/page-2.json')
    .then(data => {
        data.forEach(element => {
            let newImage = new X(element);
            allImg2.push(newImage)
            if (allImg.includes(newImage)) {
                allImg.pop(newImage);
            }
            if (!page2keywork.includes(element.keyword)) {
                page2keywork.push(element.keyword);
            }
        });

    });

function X(value) {
    this.title = value.title;
    this.image_url = value.image_url;
    this.description = value.description;
    this.keyword = value.keyword;
    this.horns = value.horns;
    allImg.push(this);
}

//render all the images
X.prototype.render = function () {
    let template = $('#template-img').html();
    let newObj = Mustache.render(template, this);
    return newObj;
};

function select() {
    $('#select').children().not(':first-child').remove();
    page1keyword.forEach(each => {

        $('#select').append(`<option> ${each}</option>`);
    });
}

function select2() {
    $('#select').children().not(':first-child').remove();
    page2keywork.forEach(each => {

        $('#select').append(`<option> ${each}</option>`);

    });
}




// show after filter
$('#select').on('change', function () {
    $('main').html('');
    allImg.forEach(item => {
        if (item.keyword == $('#select').val()) {

            let newImage = new X(item);
            let render = newImage.render();
            if (allImg.includes(newImage)) {
                allImg.pop(newImage);
            }

            $('main').append(render);

        }
    })

})

//render page 1

$('#page1').on('click', function () {
    $('main').html('');
    allImg2 = [];
    allImg.forEach(item => {
        let newImage = new X(item);
        let render = newImage.render();
        $('main').append(render);
        if (allImg.includes(newImage)) {
            allImg.pop(newImage);
        }

    })



    $('#select').on('change', function () {
        $('main').html('');
        allImg.forEach(item => {
            if (item.keyword == $('#select').val()) {

                let newImage = new X(item);
                let render = newImage.render();
                if (allImg.includes(newImage)) {
                    allImg.pop(newImage);
                }
                if (allImg2.includes(newImage)) {
                    allImg2.pop(newImage);
                }

                $('main').append(render);

            }
        })

    })
    select();
})
//render page 2
$('#page2').on('click', function () {

    $('main').html('');
    allImg2.forEach(item => {
        let newImage = new X(item);
        let render = newImage.render();
        $('main').append(render);
        if (allImg.includes(newImage)) {
            allImg.pop(newImage);
        }

    })
    $('#select').on('change', function () {
        $('main').html('');
        allImg2.forEach(item => {
            if (item.keyword == $('#select').val()) {

                let newImage = new X(item);
                let render = newImage.render();
                if (allImg2.includes(newImage)) {
                    allImg2.pop(newImage);
                }

                $('main').append(render);

            }
        })
    })

    $('#sort').on('change', function () {
        if ($('#sort').val() == 'title') {
            allImg2.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
            $('main').html('');
            allImg2.forEach((item) => {
                console.log(item);
                let render = item.render();

                $('main').append(render);
            });
        } else if ($('#sort').val() == 'horns') {
            allImg2.sort((a, b) => {
                return a.horns - b.horns;
            });

            $('main').html('');
            allImg2.forEach((e) => {
                let render = e.render();
                $('main').append(render);
            });
        }
    })
})

//sort

function sort() {
    $('#sort').append('<option> title </option>');
    $('#sort').append('<option> horns </option>');

}


$('#sort').on('change', function () {
    if ($('#sort').val() == 'title') {
        allImg.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        $('main').html('');
        allImg.forEach((item) => {
            let render = item.render();
            $('main').append(render);
        });
    } else if ($('#sort').val() == 'horns') {
        allImg.sort((a, b) => {
            return a.horns - b.horns;
        });

        $('main').html('');
        allImg.forEach((e) => {
            let render = e.render();
            $('main').append(render);
        });
    }
})
sort();
select2();







// 'use strict';
// let newarry=[];
// let optionarr=[];

// // construct function
// function X(value){
//   this.title = value.title;
//   this.image_url = value.image_url;
//   this.description = value.description;
//   this.keyword=value.keyword;
//   this.horns=value.horns;
//   newarry.push(this);
//   optionarr.push(this.keyword)

// }
// select();

// // X.prototype.render = function(){
// //   let temple =$('#template-img').html();
// //   let newobj =Mustache.render(temple,this);
// //   return newobj;
// // }




// // git data from json
// $.ajax('./data/page-1.json').then((data) => {
//   data.forEach((animals) => {
//     let title = new X(animals);
//      title.render();
//      title.optionRender();

//      // $('main').append(render);
//      // if(!optionarr.includes(this.keyword)){
//        //   newarry.push(this.keyword);
//        // console.log(title);
//       });
//       // title.render();
//     });

// // //render  //
// // X.prototype.render = function() {
// //   let animal = $('#photo-template').clone();
// //   animal.find('h2').text(this.name);
// //   animal.find('img').attr('src',`${this.src}`);
// //   animal.addClass( this.keyword );
// //   animal.find('p').text(this.detals);
// //   $('main').append(animal);


// // };
// // this.optionRender();


// X.prototype.render = function () {
//   let tem = $('#template-img').html();
//   let card = Mustache.render(tem, this);
//   $('main').append(card);
// //  title.optionRender();
//   // return card;


// }




// // render options  //
// X.prototype.optionRender=function() {
//   let option = `<option>${this.keyword}</option>`;
//   if(!optionarr.includes(this.keyword)){
//     newarry.push(this.keyword);
//     $('.keyword').append(option);
//   }
// };



// //filter//
// $( '.keyword' ).change( ( e ) => {
//   $( 'div' ).hide();
//   let targetValue = e.target.value;
//   $( `.${targetValue}` ).show();
//   if( targetValue === 'default' ){
//      $( 'div' ).show();
//   }
// } );
// function select() {
//   $('#keyword').children().not(':first-child').remove();
//   newarry.forEach(each => {

//       $('#keyword').append(`<option> ${each}</option>`);
//   });
// }






