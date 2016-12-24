import { Meteor } from 'meteor/meteor';
import News from '../../api/news/news';
import Products from '../../api/products/products';

Meteor.startup(() => {
  if (News.find().count() === 0){
    News.insert({
      picture:'/images/WeChat.png',
      title:'全程参与-3D打印教育培训火热云南省昭通市镇雄!',
      // summary:'2016年11月23日上午时分，镇雄县空降了一支的教师培训队伍。镇雄县将面临一场新的科技 \
      // 教育盛宴。参加培训的学校基本上覆盖了全县，面对如此架势，小编想说大家的选择是非常正确的！经过此次3D打印创新教育培训后，想必大家一定会受益匪浅，感触良多！',
        data:'2016-12-22',
        author:'王刚',
        flagged:false,
    });

    News.insert({
      picture:'/images/WeChat.png',
      title:'云南省教育信息化应用骨干教师高级培训落幕',
      // summary:'  为深入推进我省教育信息化和“3d打印教学应用”，通过“信息化+教育”，不断深化课程课 \
      // 堂改革，促进学生个性化发展。近日，云南省教育信息化应用骨干教师高级培训在云大举行。云南省教育厅电教馆罗文馆长一行出席会议。',
        data:'2016-12-22',
        author:'王刚',
      flagged:true
    });
    News.insert({
        picture:'/images/WeChat.png',
        title:'云南省教育信息化应用骨干教师高级培训落幕',
        // summary:'  为深入推进我省教育信息化和“3d打印教学应用”，通过“信息化+教育”，不断深化课程课 \
      // 堂改革，促进学生个性化发展。近日，云南省教育信息化应用骨干教师高级培训在云大举行。云南省教育厅电教馆罗文馆长一行出席会议。',
        data:new Date(),
        author:'王刚',
        flagged:true
    });
      News.insert({
          picture:'/images/WeChat.png',
          title:'云南省教育信息化应用骨干教师高级培训落幕',
          // summary:'  为深入推进我省教育信息化和“3d打印教学应用”，通过“信息化+教育”，不断深化课程课 \
      // 堂改革，促进学生个性化发展。近日，云南省教育信息化应用骨干教师高级培训在云大举行。云南省教育厅电教馆罗文馆长一行出席会议。',
          data:new Date(),
          author:'王刚',
          flagged:true
      });
  }
  if (Products.find().count() === 0){
    Products.insert({
      nameCN:'3d打印机',
      nameEN:'3D PRINTER',
      onMainPage:true,
    });
    Products.insert({
      nameCN:'3d扫描仪',
      nameEN:'3D EASY CAPTURER',
      onMainPage:true,
    });
    Products.insert({
      nameCN:'打印耗材',
      nameEN:'filament',
      onMainPage:true,
    });
    Products.insert({
      nameCN:'3d软件',
      nameEN:'3dsoftware',
      onMainPage:false,
    });
  }
});
