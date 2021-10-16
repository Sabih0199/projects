$(function ($) {
    // Loader
    setTimeout(function(){
        $('#site-loader').hide();
    },800);
    $(".video-play-btn").click(function () {
            $(this).parent(".webinar-video").find("video")[0].play();
            $(this).parent(".webinar-video").find("video").attr("controls", true);
            $(this).hide();
    });
    $("video").on("pause", function (e) {
        $(e.target).parent('.webinar-video').find('.video-play-btn').show();
        $(e.target)[0].controls = false;
    }); 
    // Gallery
    $('#gallery').lightGallery({
        controls: false,
        // width: '100%',
        // height: '100%',
        counter: false,
        download: false,
        //
        subHtmlSelectorRelative: true,
        mode: 'lg-fade',
        addClass: 'gallery-popup fixed-size'
    });
    $('[data-fancybox]').fancybox({
        protect: true
    });
    // Spech Form
    $('#tt-spec-check1 input[name="ttspecgeo"]').change(function(){
        $(this).parents('.spech-check-form').find('#tt-spec-check1').addClass('d-none');
        gtVal1 = $(this).val();
        if (gtVal1 == 'no') {
            $(this).parents('.spech-check-form').find('#tt-spec-check2').removeClass('d-none');
        } else if (gtVal1 == 'yes') {
            $(this).parents('.spech-check-form').find('#tt-spec-form').removeClass('d-none');
        }
    });
    $('#tt-spec-form .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tt-spec-form').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check1').removeClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check1 input[name="ttspecgeo"]').prop( "checked", false );
    });
    $('#tt-spec-check2 .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tt-spec-check2').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check1').removeClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check1 input[name="ttspecgeo"]').prop( "checked", false );
    });
    $('#tt-spec-check2 input[name="tspecgeo"]').change(function(){
        $(this).parents('.spech-check-form').find('#tt-spec-check2').addClass('d-none');
        gtVal2 = $(this).val();
        if (gtVal2 == 'no') {
            $(this).parents('.spech-check-form').find('#tspec-check2-no').removeClass('d-none');
        } else if (gtVal2 == 'yes') {
            $(this).parents('.spech-check-form').find('#tspec-check2-yes').removeClass('d-none');
        }
    });
    $('#tspec-check2-no .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tspec-check2-no').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check2').removeClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check2 input[name="tspecgeo"]').prop( "checked", false );
        $(this).parents('.page-step-form').find('.submit-btn').attr('type', 'button');
    });
    $('#tspec-check2-yes .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tspec-check2-yes').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check2').removeClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-check2 input[name="tspecgeo"]').prop( "checked", false );
    });
    $('#tt-spec-form-step .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tt-spec-form-step').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tt-spec-form').removeClass('d-none');
        $(this).parents('.page-step-form').find('.submit-btn').attr('type', 'button');
    });
    $('#tspec-form-step .back-btn').click(function() {
        $(this).parents('.spech-check-form').find('#tspec-form-step').addClass('d-none');
        $(this).parents('.spech-check-form').find('#tspec-check2-yes').removeClass('d-none');
        $(this).parents('.page-step-form').find('.submit-btn').attr('type', 'button');
    });
    $('.spech-check-form .next-btn').click(function() {
        $(this).parents('.page-step-form').addClass('d-none');
        $(this).parents('.page-step-form').next().removeClass('d-none');
    });
    $('.spech-check-form .page-step-form .info').click(function(){
        var opt = $(this).attr('info-img');
        $(this).parents('.page-step-form').find('.inf-img-default').addClass('d-none');
        $(this).parents('.page-step-form').find('.info-img[info-img]').addClass('d-none');
        $(this).parents('.page-step-form').find('.info').removeClass('active');
        $(this).parents('.page-step-form').find('.info-img[info-img='+opt+']').removeClass('d-none');
        $(this).addClass('active');
    });
    $('.spech-check-form .page-step-form .spec-info').click(function(){
        var opt = $(this).attr('info-img');
        $(this).parents('.page-step-form').find('.info-img[info-img]').addClass('d-none');
        $(this).parents('.page-step-form').find('.spec-info').removeClass('active');
        $(this).parents('.page-step-form').find('.info-img[info-img='+opt+']').removeClass('d-none');
        $(this).addClass('active');
    });
    $('.spech-check-form .fp').click(function(){        
        $(this).parents('.page-step-form').next().find('.submit-btn').attr('type', 'submit');
    });
    $('.spech-check-form').submit(function( event ) {
        event.preventDefault();
        $(this).addClass('d-none');
        $(this).parents('.spec-form').find('.spec-check-form-confirmation').removeClass('d-none');     
        // var queryString = $('.spech-check-form').serialize();
        // console.log(queryString); 
    });
    $('.spec-check-form-confirmation .req-price-form-trigger').click(function(){
        $(this).parents('.spec-form').addClass('d-none');
        $(this).parents('.spec-form').next().removeClass('d-none');
    });
    $('#contact-details .back-btn').click(function() {
        $(this).parents('.req-price').prev().removeClass('d-none');
        $(this).parents('.req-price').addClass('d-none');
    });
    $('#address-details .back-btn').click(function() {
        $(this).parents('.req-price-form').find('#address-details').addClass('d-none');
        $(this).parents('.req-price-form').find('#contact-details').removeClass('d-none');
    });
    $('#additional-details .back-btn').click(function() {
        $(this).parents('.req-price-form').find('#additional-details').addClass('d-none');
        $(this).parents('.req-price-form').find('#address-details').removeClass('d-none');
    });
    $('.req-price-form .next-btn').click(function() {
        $(this).parents('.page-step-form').addClass('d-none');
        $(this).parents('.page-step-form').next().removeClass('d-none');
    });
    $('.req-price-form').submit(function( event ) {
        event.preventDefault();
        $(this).addClass('d-none');
        $(this).parents('.req-price').find('.req-price-form-confirmation-text').removeClass('d-none');     
        // var queryString = $('.spech-check-form').serialize();
        // console.log(queryString); 
    });
    $(".res-tab-accordion").easyResponsiveTabs({
        type: 'vertical', 
        tabidentify: 'vert'
    });
});

var onloadCallback = function() {
    // grecaptcha.render('recaptcha', {
    //     'sitekey' : '6LfYNnQaAAAAAITODsMZEdeVBOCaOnvIuQvuBc_a'
    //   });
      $(".g-recaptcha").each(function() {
        var object = $(this);
        grecaptcha.render(object.attr("id"), {
            "sitekey" : "6LfYNnQaAAAAAITODsMZEdeVBOCaOnvIuQvuBc_a",
            "callback" : function(token) {
                object.parents('form').find(".g-recaptcha-response").val(token);
                // object.parents('form').submit();
            }
        });
    });
};

// Check If Map Is Present
if($('#map').length) {
    google.maps.event.addDomListener(window, 'load', init);
}

// Initialize and add the map
// google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(51.512570, -0.143170),
        zoom: 2,
        disableDefaultUI: true,
        draggable: true,
        backgroundColor: 'none',
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "gamma": "0.00"
            }, {
                "lightness": "-100"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }],
    }

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var prev_infowindow = false;
    var overlay = new google.maps.OverlayView();
    overlay.draw = function () {};
    overlay.setMap(map);

    google.maps.event.addListenerOnce(map, 'idle', function () {
        if (overlay.getProjection()) {
            var points = [{
                    latlng: new google.maps.LatLng(38.9597594, 34.9249653),
                    title: 'Turkey',
                    company: 'Engineering Mach. Che. Ind',
                    description: 'Çiğli Izmier<br><span style="color: #DE6F3E;">E:</span>&#32;artunertem@gmail.com',
                    id: '10'
                }, {
                    latlng: new google.maps.LatLng(51.165691, 10.451526),
                    title: 'Germany',
                    company: 'Falk&Thomas Engineering GmbH',
                    description: 'Bad Nauheim<br><span style="color: #DE6F3E;">E:</span>&#32;fteng@t-online.de',
                    id: '0'
                }, {
                    latlng: new google.maps.LatLng(39.074207, 21.824312),
                    title: 'Greece',
                    company: 'Thermal Management Solutions',
                    description: 'Piraeus<br><span style="color: #DE6F3E;">E:</span>&#32;info@thermal.gr',
                    id: '1'
                }, {
                    latlng: new google.maps.LatLng(20.593683, 78.962883),
                    title: 'India',
                    company: 'Entech Engineers',
                    description: 'Vadodara<br><span style="color: #DE6F3E;">E:</span>&#32;ashwin.chandarana@calgavin.com',
                    id: '2'
                }, {
                    latlng: new google.maps.LatLng(-2.4833826, 117.8902853),
                    title: 'Indonesia',
                    company: 'PT Ingenious',
                    description: 'Cileungsi Bogor<br><span style="color: #DE6F3E;">E:</span>&#32;poltak@ingenious.co.id',
                    id: '3'
                }, {
                    latlng: new google.maps.LatLng(36.5748441, 139.2394179),
                    title: 'Japan',
                    company: 'Advanced Process and Engineering Consultancy (APEC)',
                    description: 'Tokyo<br><span style="color: #DE6F3E;">E:</span>&#32;wantanabe@a-pec.jp',
                    id: '4'
                }, {
                    latlng: new google.maps.LatLng(22.5000485, -100.0000375),
                    title: 'Mexico',
                    company: 'Tecnopinch Integral Solutions, S.A de C.V.',
                    description: 'Benito Juarez<br><span style="color: #DE6F3E;">E:</span>&#32;luis.quillares@tecnopinch.com.mx',
                    id: '5'
                }, {
                    latlng: new google.maps.LatLng(64.6863136, 97.7453061),
                    title: 'Russia',
                    company: 'hi-Prom Bureau Ltd',
                    description: 'Saint-Petersburg<br><span style="color: #DE6F3E;">E:</span>&#32;sivukha@hiprom.ru',
                    id: '6'
                }, {
                    latlng: new google.maps.LatLng(-28.8166236, 24.991639),
                    title: 'South Africa',
                    company: 'Mass and Heat Transfer Technology (Pty) Ltd',
                    description: 'Roodeport<br><span style="color: #DE6F3E;">E:</span>&#32;christo@mhtt.co.za',
                    id: '7'
                }, {
                    latlng: new google.maps.LatLng(36.638392, 127.6961188),
                    title: 'South Korea',
                    company: 'EJJV Korea',
                    description: 'Seoul<br><span style="color: #DE6F3E;">E:</span>&#32;cy.yoon@ejjv.co.kr',
                    id: '8'
                }, {
                    latlng: new google.maps.LatLng(23.9739374, 120.9820179),
                    title: 'Taiwan',
                    company: 'Chusco Co., Ltd.',
                    description: 'New Taipei City<br><span style="color: #DE6F3E;">E:</span>&#32;vincent-chusco@umail.hinet.net',
                    id: '9'
                }, {
                    latlng: new google.maps.LatLng(24.0002488, 53.9994829),
                    title: 'UAE',
                    company: 'MEISCO Energy & Industrial',
                    description: 'Abu Dhabi<br><span style="color: #DE6F3E;">E:</span>&#32;balu.jacob@meisco.ae',
                    id: '11'
                }

            ];

            // for each point     
            var markers = [];
            var content = '';
            points.forEach(function (point) {
                var nearby = false;
                var pointPixelPosition = overlay.getProjection().fromLatLngToContainerPixel(point.latlng);
                markers.forEach(function (marker) {
                    var markerPixelPosition = overlay.getProjection().fromLatLngToContainerPixel(marker.getPosition());
                    // check for marker 'near by'
                    if (Math.abs(pointPixelPosition.x - markerPixelPosition.x) < 0.1 && Math.abs(pointPixelPosition.y - markerPixelPosition.y) < 0.1) {
                        nearby = true;
                        marker.setTitle(marker.getTitle() + '<div class="marker-details"><h3>' + point.title + '</h3><p>' + point.description + '</p></div>');
                    }
                });


                // create new marker
                if (!nearby) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: point.latlng,
                        icon: "assets/images/map-marker.svg"
                    });
                    
                    var content = '<div class="marker-details"><div style="color:#DE6F3E;font-weight:bold;font-size:28px;line-height:24px;letter-spacing: -0.84px;font-family: Meta Pro;margin-bottom:10px;">' + point.title + '</div><div style="font-size:16px;color:#707070;font-family:Meta Pro Book;line-height:22px;letter-spacing: -0.48px;margin-bottom:10px;">' + point.company + '</div><a href="/contact-us?profile=' + point.id + '" style="background-color:#707070;border-radius:3px;color:#fff;text-decoration:none;padding: 3.5px 10px;font-size: 17px;font-family: Meta Pro;font-weight:bold;display: flex;justify-content: space-between;line-height:30px;letter-spacing:-0.51px;">Parla con noi <img src="assets/images/ar-right.svg"></a></div>';

                    markers.push(marker);
                    //var markerCluster = new MarkerClusterer(map, markers);
                    google.maps.event.addListener(marker, 'click', function () {
                        //close existing info windows if open
                        if (prev_infowindow) {
                            prev_infowindow.close();
                        }

                        //create infowindow for marker
                        var infowindow = new google.maps.InfoWindow();
                        prev_infowindow = infowindow;
                        readjustPositionDelay();
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                        map.panTo(marker.getPosition());
                        google.maps.event.addListener(infowindow, 'closeclick', readjustPosition);
                    });

                }

                // bounce
                function toggleBounceOn() {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }

                function toggleBounceOff() {
                    marker.setAnimation(null);
                }

                function readjustPosition() {
                    $('html, body').animate({
                        scrollTop: $("#map").offset().top - 70
                    }, 0);
                }

                function readjustPositionDelay() {
                    $('html, body').animate({
                        scrollTop: $("#map").offset().top - 70
                    }, 300);
                }

                marker.addListener('mouseover', toggleBounceOn);
                marker.addListener('mouseout', toggleBounceOff);
                marker.addListener('mouseleave', toggleBounceOff);


            });
        }

    });
}