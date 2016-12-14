import { Meteor } from 'meteor/meteor';

Meteor.subscribe('news');
Meteor.subscribe('products','onMainPage');
