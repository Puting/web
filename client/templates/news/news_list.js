import News from '../../../lib/news'

Template.newsList.helpers({
  news:function(){
    return News.find();
  }
});
