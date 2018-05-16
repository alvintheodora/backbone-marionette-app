import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Mn from 'backbone.marionette';
import faker from 'faker';


var User = Backbone.Model.extend({});
var Users = Backbone.Collection.extend({
    model: User
});


var UserView = Mn.View.extend({
    template: '#list-template',
    tagName: 'ul'
});

var NoListView = Mn.View.extend({
    template: '#noList-template',
    className: 'noList'
});

var UsersView = Mn.CollectionView.extend({
    childView: UserView,//childView
    emptyView: NoListView,    
    el: '#list'
});



var FormView = Mn.View.extend({
    template: '#form-template',
    el: '#form',
    events: {
        'click button': 'createNewUser'
    },
    ui: {
        name: '#name',
        age: '#age'
    },
    createNewUser: function(e){
        e.preventDefault();
        this.collection.add({
            name: this.ui.name.val(),
            age: this.ui.age.val()
        });

        this.ui.name.val('');
        this.ui.age.val('');
    }
});


var AppView = Mn.View.extend({
    regions: {
        form: '#form',
        list: '#list'              
    },
    el: '#innerContainer',
    template: '#main-template',
    onRender: function() {          
        this.showChildView('list', new UsersView({collection: this.collection}));
        this.showChildView('form', new FormView({collection: this.collection}));   
    }
});


// Create our Application
var App = Mn.Application.extend({    
    region: '#container',
    
    
    onBeforeStart: function(){
        this.users = new Users();
        _.range(5).map( (id)=> {
            this.users.add({
                name: faker.name.findName(),
                age: 20 + faker.random.number(40)
                //photo: faker.image.avatar()
            });
        });
        //console.log(this.users);
    },
    onStart: function() {             
        this.showView(new AppView({collection: this.users}));     
      }
});

var app = new App();
app.start();



/////////////views for Router///////////////
var SecondView = Backbone.View.extend({
    el: $('.blogs-list'),    
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(_.template($('.second-view').html()));
    }
});

var ThirdView = Backbone.View.extend({
    el: $('.blogs-list'),    
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(_.template($('.third-view').html()));
    }
});


///////////////////ROUTER/////////////////////////////
var Router = Backbone.Router.extend({    
    routes: {
        '': 'view3',     
        'page2': 'view2',
        'page3': 'view3'
    },   
    view2: () => {
        new SecondView();
    },
    view3: () => {
        new ThirdView();
    }
});
var router = new Router();
Backbone.history.start({pushState: true});

//setting for pushState: true
$('body').on('click', 'a[href^="/"]', function(e){
    e.preventDefault();
    router.navigate($(this).attr('href'), {trigger: true});
  });