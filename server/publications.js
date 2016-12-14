import News from '/lib/news'
import Products from '/lib/products'
import { Meteor } from 'meteor/meteor';

Meteor.publish('news',function(){
  return News.find();
});

Meteor.publish('products',function(){
  return Products.find({onMainPage:true});
});
