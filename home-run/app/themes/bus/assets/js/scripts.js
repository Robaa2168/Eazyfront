tjq(document).ready(function() {
    // UI Form Element
});

        jQuery('.datetimepicker').datetimepicker(
            /*{controlType: 'select',
    oneLine: true,
    timeFormat: 'hh:mm tt'}*/
    );
   
        tjq(".flexslider").flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: true,
            directionNav: false,
            slideshow: true,
            slideshowSpeed: 5000
        });
        tjq(".travelo-google-map").gmap3({
            map: {
                options: {
                    center: [-1.260988,36.7844897],
                    zoom: 12
                }
            },
            marker:{
                values: [
                    {latLng:[-1.260988,36.7844897], data:"Paris"}

                ],
                options: {
                    draggable: false
                },
            }
        });
  