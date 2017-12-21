import Marionette from 'backbone.marionette';
//import template from '../templates/item.jst';
//var MyView1 = require('./MyView1');
import MyView1 from './MyView1';

export default Marionette.View.extend({
  template: _.template('<div id="body-hook"></div>'),

  regions: {
    main: '#body-hook'
  },
  
  onRender(){
    this.showChildView('main', new MyView1());
  }


});
/*const MyView1 = Marionette.View.extend({
  tagName: 'h1',
  template: _.template('TEST from sub view')
});
*/
