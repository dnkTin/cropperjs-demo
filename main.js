let cropper;
$( function() {
  $( "#slider" ).slider({
    max: 1,
    min: 0,
    value: 0,
    step: 0.0001,
    slide: function (event, ui) {
      // if (cropper.canvasData.naturalWidth < 600 || cropper.canvasData.naturalHeight < 400) {
      //   event.preventDefault();
      //   return
      // }
      const zoomValue = parseFloat($("#slider").slider("value"));
      cropper.zoomTo(zoomValue.toFixed(4))
    }
  });
  $('#cropperfile').change(function (e) {
    if (file = this.files[0]) {
      var OFReader = new FileReader();
      OFReader.onload = function () {
        $("#image").attr('src', OFReader.result);
        initCropper();
      }
      OFReader.readAsDataURL(file);
    }
  })
} );

function initCropper () {
  const image = document.getElementById('image');
  if (cropper) {
    cropper.destroy();
  }
  cropper = new Cropper(image, {
    aspectRatio: 16 / 9,
    crop(event) {
      
      // console.log(cropper.getCroppedCanvas().toDataURL('image/jpeg'))
    },
  });
}