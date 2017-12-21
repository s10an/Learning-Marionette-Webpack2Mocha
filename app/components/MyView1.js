var Marionette = require('backbone.marionette');
var _ = require('underscore');

const MyView1 = Marionette.View.extend({
  tagName: 'h1',
  template: _.template('TEST from sub view')
});



