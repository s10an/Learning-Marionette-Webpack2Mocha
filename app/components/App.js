import Marionette from 'backbone.marionette';
import RootView from './RootView';
var Mn = require('backbone.marionette');
var _ = require('underscore');

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new RootView());
    
  }
});
