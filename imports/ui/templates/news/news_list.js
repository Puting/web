import News from '../../../api/news/news';
import { Template } from 'meteor/templating';
import './new_item.html';
import './new_list.html';
;

Template.newsList.helpers({
  news:function(){
    return News.find();
  }
});
