//后台admin.html页面
import './admin.html';

// import '../templates/news/news_list';
// import '../templates/products/products_list';


//首页订阅数据news和products
Meteor.subscribe('news');
Meteor.subscribe('products');
