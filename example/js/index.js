$(function () {
  //  Keep in touch div
  $("#keep-in-touch_top").html($("#keep-in-touch").html())

  //  Checks
  const tasks = $("#form-main > div > h3");

  tasks.each((_, task) => {
    const check = $("<span>")
      .attr("id", "check-" + $(task).parent().attr("id"))
      .addClass("task-check me-2")
      .prependTo(task);

    check.html('<ion-icon name="square-outline"></ion-icon>');
  });

  function setExampleCheckStatus(number, status) {
    const check = $("#check-example-" + number);
    check.html(`<ion-icon name="${(!status) ? 'square-outline' : 'checkbox-outline'}"></ion-icon>`);
  }

  window.setExampleCheckStatus = setExampleCheckStatus;
});