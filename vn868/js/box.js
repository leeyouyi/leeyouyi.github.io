$(document).ready(function() {
  $('.divBox .head .tit').html($('#box_title').html());
  $('.divBox .body .context').html($('#box_ctx').html());
  $('.divBox .body .btns').html($('#box_btn').html());
  $('#divBox')
    .jqm()
    .jqDrag('.drag');
  $('.vbutton').click(function() {
    var id = this.id;
    eval('fn_' + id + '()');
  });
});
function showBox(b) {
  $('#divBox .body .context').html(b);
  $('#divBox .body').css({ background: '#F1F1F1' });
  if ($('#divBox .body .context .rpt_lm').length > 0) {
    $('#divBox .body').css({ background: '#FFFF91' });
  }
  var a = $('#divBox .body .context br').length;
  if (a > 4) {
    $('#divBox .body .context').height(57 + (a - 4) * 14);
  }
  $('#divBox').jqmShow();
  $('.jqmOverlay').unbind();
  $(window).trigger('scroll');
}
