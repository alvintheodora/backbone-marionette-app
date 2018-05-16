import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Mn from 'backbone.marionette';

import initModel from './initModel';
import initRouter from './initRouter';

import MainView from './views/MainView';

let App = Mn.Application.extend({    
    region: '#container',    
    
    onBeforeStart:  function(){
        this.data = initModel();//Promise
        this.router = initRouter();   
        this.root = new MainView({el: '#container'});    
        this.showViewMain = (view) => {     
            this.root.showChildView('main', view);  
        };    
    },
    onStart: function() {                  
        Backbone.history.start(); 
      }
});

let app = new App();

export default app;