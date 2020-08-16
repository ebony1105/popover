$(clickMe).on('click', function(e) {
  $(popover).show();
  console.log('show')
  setTimeout(function(e) {
    $(document).one('click', function() {
      console.log('hide')
      $(popover).hide();
    })
  }, 0)

})



$(popover).on('click', function(e) {
  console.log('show2')
  $(popover).show();
  e.stopPropagation()
})
