$(function() {
  var AnimDuration = 200;
  var HeaderMinHeight = $("header").height();

  $(".trigger-link").on("click", function(e) {
    e.preventDefault();
    
    var HeaderHeight = $(".sub-menu", this).innerHeight();
    var ActualHeaderHeight = HeaderHeight+$(this).offset().top;

    // If <header> is not dropped
    if (!$("header").hasClass("dropped-header")) {
      // Adds the sub-menu in the flow
      $(this).children(".sub-menu").show();
      // Animates the down of <header>
      $("header").animate({height: ActualHeaderHeight}, AnimDuration);
      // Displays the sub-menu
      $(this).children(".sub-menu").toggleClass("sub-menu-change");
      // Adds a class to <header> that indicates it's dropped
      $("header").toggleClass("dropped-header");
    }

    // If the user wants to hide the sub-menu. In other words, a sub-menu is displayed and the corresponding trigger-link is clicked
    else if ($('header.dropped-header') && $(this).children(".sub-menu").hasClass("sub-menu-change")) {
      // Removes the sub-menu-change class and removes the sub-menu from of the flow
      $(this).children(".sub-menu").toggleClass("sub-menu-change");
      $(this).children(".sub-menu").hide();
      // Animates the way up of <header>
      $("header").animate({height: HeaderMinHeight}, AnimDuration);
      // Removes the dropped-header class
      $("header").removeAttr("class");
    }

    // If a sub-menu is displayed and the user wants to display another
    else {
      // Removes all sub-menu-change classes and removes all sub-menus from of the flow
      $(".sub-menu").removeClass("sub-menu-change");
      $(".sub-menu").hide();
      // Adds the sub-menu in the flow
      $(this).children(".sub-menu").show();
      // Animates the way of <header>
      $("header").animate({height: ActualHeaderHeight}, AnimDuration);
      // Displays the sub-menu
      $(this).children(".sub-menu").toggleClass("sub-menu-change");
    }
  });
});