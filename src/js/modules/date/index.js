const $ = require('jquery');
require('./datetimepicker');

$.datetimepicker.setLocale('ru');
$('#date').datetimepicker({
  timepicker: false,
  format: 'd.m.Y',
});
