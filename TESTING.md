# Testing

## Compatibility

## Devtools testing

  * The web was checked by devtools implemented on Firefox and Chrome browsers.

## Validator

  * ### HTML
    To validate the code, the official validator [W3C](https://validator.w3.org/) was used.  
    **Two errors were found and solved:**
      * Typography error: figcaptation instead of figcaption in history.html.
        * The solution was type it correctly. **figcaption**

        ![error1](documentation/html_test/error1.png)

      * Semantic error: button can not have a div as child.
        * The solution was change div for span

        ![error2](documentation/html_test/error2.png) 

    After that all test were passed. Only info messages appears.

    * **Landing Page**

        ![Landing Page test](documentation/html_test/index_test.png)

    * **History Page**

        ![History Page test](documentation/html_test/history_test.png)

    * **Gallery Page**

        ![Gallery Page test](documentation/html_test/gallery_test.png)

    * **Recipe Page**

        ![Recipe Page test](documentation/html_test/recipe_test.png)

    * **Weather Page** 

        ![Weather Page test](documentation/html_test/weather_test.png)

    * **Map Page** 

        ![Map Page test](documentation/html_test/map_test.png)


  * ### CSS
    
    To validate css file, the official validator [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used.
    **There was one error was found and solved**

      * Missing a unit after a number in a font-size property. Line 752
        * The solution was add units - rem

      ![error3](documentation/css_test/error1.png) 

    After that no error were found.

    ![CSS test](documentation/css_test/css_test.png)

  * ### JavaScript

    To validate code in JavaScript, the tool [JSHint](https://jshint.com/) was used.

    No errors were founded, only warnings. Mainly missing ";" and recommendation od using dot notation in objects.

    After solved this warning:

      * **carousel.js** - Warnings do not affect the execution of the code. The code was written following the library's documentation. [Swiper](https://swiperjs.com/get-started#install-from-npm)
    
      ![Carousel test](documentation/js_test/carousel_test.png)

      * **dropmenu.js**

      ![Drop menu test](documentation/js_test/drop_test.png)

      * **history.js** - Warnings do not affect the execution of the code.

      ![History test](documentation/js_test/cards_test.png)

      * **map.js** - Warnings do not affect the execution of the code. L undefined variable does not affect to the code. See Leaflet documentation [Leaflet](https://leafletjs.com/examples/quick-start/). Declaring a L variable crashes the code.

      ![Map test](documentation/js_test/map_test.png)

      * **recipe.js** - Warnings do not affect the execution of the code. 

      ![Recipe test](documentation/js_test/recipe_test.png)

      * **weather.js** - Warnings do not affect the execution of the code.
      
      ![Map test](documentation/js_test/weather_test.png)


## Acesibility and Performance