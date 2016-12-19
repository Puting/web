import { Mongo } from 'meteor/mongo';

const News = new Mongo.Collection('news');

export default News;

if(Meteor.isServer){
  Meteor.publish('news',function(){
    return News.find();
  });
}
