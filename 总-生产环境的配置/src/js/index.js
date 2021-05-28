import '../css/a.css';
import '../css/b.css';

function test() {
  const obj = [
    {
      name: '王金玉',
      age: 20,
      sex: '女',
    },
    {
      name: '张哈玉',
      age: 21,
      sex: '女',
    },
  ];
  const obj1 = [
    {
      name: '',
      age: 20,
      sex: '女',
    },
    {
      name: '张金玉',
      age: 21,
      sex: '女',
    },
  ];
  for (const item of obj) {
    for (const item1 of obj1) {
      console.log(item1);
      if (item.name == item1.name) {
        alert('不能相等');
        return false;
      }
    }
  }
  console.log('jajaj');
}
test();
