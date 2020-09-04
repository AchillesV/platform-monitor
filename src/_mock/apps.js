import Mock from 'mockjs';

export const appdatas = () =>{
  return Mock.mock({
    'dataList|10-20': [{
      'key|+1': 1,
      'text|1': '@ctitle(2, 4)',
      'count': function() {
        return this.children.length;
      },
      'children|5-10': [{
        'key': '@id',
        'title': '@ctitle(3, 5)',
        'funcIcon|+1': [
          '/src/assets/funcicon/search.png',
          '/src/assets/funcicon/text.png',
          '/src/assets/funcicon/think.png',
          '/src/assets/funcicon/print.png',
          '/src/assets/funcicon/calender.png',
          '/src/assets/funcicon/calc.png'
        ]
      }]
    }]
  });
};

export const recommends = () => {
  return Mock.mock({
    'dataList|1-6': [{
      'key': '@id',
      'title': '@ctitle(3, 5)',
      'itemPath': '@word(2, 3) / @word(3, 5)',
      'funcIcon|+1': [
        '/src/assets/funcicon/search.png',
        '/src/assets/funcicon/text.png',
        '/src/assets/funcicon/think.png',
        '/src/assets/funcicon/print.png',
        '/src/assets/funcicon/calender.png',
        '/src/assets/funcicon/calc.png'
      ]
    }]
  });
};
