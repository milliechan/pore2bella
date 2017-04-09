

let image = document.getElementById('image');
let submit = document.getElementById('submit');
let form = document.querySelector('form');

console.log("i'm in app.js!");

function visionTest(e) {
  e.preventDefault();
  console.log(e);

}

function readURL(input) {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}
  let files = input.target.firstElementChild.files
  if (files && files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0])    
    console.log('made it into the if yas')
    // console.log(reader.readAsDataURL(files[0]) )
  }
}

form.addEventListener('submit', function(e) { 
  e.preventDefault(); 
  console.log(e);
  readURL() 
});
