import News from 'news'

Template.newsList.helpers({
  news:function(){
    return News.find();
  }
});
