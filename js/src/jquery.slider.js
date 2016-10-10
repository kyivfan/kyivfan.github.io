(function($) {

  $.fn.slider = function() {
    var leftUIEl = $('.carousel_arrow_left');
    var rightUIEl = $('.carousel_arrow_right');
    var elementsList = $('.carousel_list');

    var pixelsOffset = 320;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('.carousel_element').length;
    var elementsCount = elementsList.find('.carousel_element1').length;
    var elementsCount = elementsList.find('.carousel_element2').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
            currentLeftValue += 320;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
          currentLeftValue -= 320;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
  });

  return this;
}

})(jQuery);
