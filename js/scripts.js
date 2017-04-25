$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#salad").prepend("<li>Greetings...</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#salad").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#salad").prepend("<li>Bite me</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#salad").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#salad").prepend("<li>Fine</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#salad").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
