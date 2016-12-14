import News from '/lib/news'
import { Meteor } from 'meteor/meteor';

Meteor.publish('news',function(){
  return News.find();
});
