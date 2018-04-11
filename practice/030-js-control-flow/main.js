// // array
// var arr =[1,2,3];

// // arr =['a','b','c'];

// // var person = arr[1];

// // var len = arr.length;

// // console.log(person,arr[2]);

// // //object

// // var person = {
// //     name: 'whh',
// //     age: 18,
// //     wife: {
// //         name:'lbb',
// //         age: 20,
// //     },
// //     pet: {
// //         name: 'albaba',
// //         type: 'cat',
// //     }
// // }

// // console.log(person);
// // console.log(person.name);
// // console.log(person.wife.name);

// var a = {
//     a1: [
//         'a','b',{v:666}
//     ]
// }

// var b = [
//     1,3,'a', {
//         b2: {
//             a:1,
//             v:7,
//             c:[{
//                 z:666
//             }]
//         }
//     }
// ]

// var c = {
//     a: {
//         u:1,
//         d: {
//             o: {
//                 z: {1:2,y: [1,2]}
//             },
//             p: {
//                 yo:[3,5,666]
//             }
//         }
//     }
// }

// var d = [
//     [1,3,'abc'],
//     [
//         'muhaha',
//         {d:1,v:['a','b',{z:666}]}
//     ]
// ]

// var e = {
//     a:[3,{
//         b:1,
//         v:[1,3,{
//             p:666
//         }]
//     }]
// }

// console.log(a.a1[2].v);
// console.log(b[3].b2.c[0].z);
// console.log(c.a.d.p.yo[2]);
// console.log(d[1][1].v[2].z);
// console.log(e.a[1].v[2].p);

// //打印出“我叫王花花，我今年18岁了”

// var person ={
//     name:'王花花',
//     age:18,
// }

// var a = '我叫' + person.name + ',我今年' + person.age + '岁了';
// console.log(a);

// //打印出“我叫李全蛋，我老婆叫王花花，今年18岁了”

// var person = {
//     name: '李全蛋',
//     wife: {
//         name: '王花花',
//         age: 18,
//     }
// }

// var b = '我叫' + person.name + ',我老婆叫' + person.wife.name + ',今年' + person.wife.age + '岁了';

// console.log(b);

// //打印出“我叫李全蛋，我老婆一共有200块”

// person = {
//     name: '李全蛋',
//     wife: {
//         name: '王花花',
//         age: 18,
//         huabei: 1000,
//         balance: 1200
//     },
// }

// var m = person.wife.balance-person.wife.huabei;
// var c = '我叫' + person.name + '，我老婆一共有' + m +'块';

// console.log(c);

// //打印出“我叫李全蛋，我丈人有3个朋友”

// person = {
//     name: '李全蛋',
//     wife: {
//         name: '王花花',
//         dad: {
//             friends: ['王一','王二','李三']
//         }
//     },
// }


// var c = '我叫' + person.name + ',我丈人有' + person.wife.dad.friends.length + '个朋友';

// console.log(c);

// //打印出“我叫李全蛋，我丈人的第一个朋友叫王一，第三个朋友叫李三”

// person = {
//     name: '李全蛋',
//     wife: '王花花',
//     dad: {
//         friends:[{
//             name:'王一',
//             children: 1,
//             averageScore: 44
//         }, {
//             name:'王二',
//             children:3,
//             averageScore:98,
//         }, {
//             name: '李三',
//             children: 5,
//             averageScore: 87
//         }]
//     },
// }

// var d = '我叫' + person.name + ',我丈人第一个朋友叫' + person.dad.friends[0].name + ',第三个朋友叫' + person.dad.friends[2].name;

// console.log(d);

// //打印出“我叫李全蛋，我丈人朋友们的孩子们的平均分是85.888888888”

// person = {
//     name: '李全蛋',
//     wife: '王花花',
//     dad: {
//         friends:[{
//             name:'王一',
//             children: 1,
//             averageScore: 44
//         }, {
//             name:'王二',
//             children:3,
//             averageScore:98,
//         }, {
//             name: '李三',
//             children: 5,
//             averageScore: 87
//         }]
//     },
// }


// var avg = (1 * person.dad.friends[0].averageScore + 3* person.dad.friends[1].averageScore +5 * person.dad.friends[2].averageScore)/(person.dad.friends[0].children + person.dad.friends[1].children + person.dad.friends[2].children)
// var e = '我叫' + person.name + ',我丈人朋友们的孩子的平均分是' + avg;

// console.log(e);

//
// var age = 17;

// if  (age < 18) {
//     console.log('kid');
// }  else if (age == 18) {
//     console.log('刚成年')
// }

//

// var age_element = document.querySelector('#age');

// age_element.addEventListener('change', function () {
//   var age = age_element.value;
//   console.log(age);
// })

// var age_element = document.querySelector('#age');
// age_element.addEventListener('change', function() {
//     var age = age_element.value;
//     console.log(age);
// });


// var age_element = document.querySelector('#age');

// age_element.addEventListener('keyup', function () {
//   var age = age_element.value;
//   if (!age) {
//     console.log('年龄不能为空')
//   } else {
//     console.log('yo')
//   }
// });

var age_element = document.querySelector('#age');
var name_element = document.querySelector('#name');
age_element.addEventListener('change', function () {
    var age = age_element.value;
    age = parseInt(age);

    if (!age && age !== 0) {
        console.log('年龄不能白白');
    } else if (age < 1) {
        console.log('还没有断奶就别玩电脑，有辐射');
    } else if (age == 18) {
        console.log('刚够称');
    } else if (age > 18 && age < 40) {
        console.log('青年才俊');
    } else {
        console.log('ye');
    }
});

name_element.addEventListener('change', function () {
    var name = name_element.value;
    
    if (!name) {
        console.log('无名者，请输入');
    }   else {
        console.log(name +',你猴啊');
    }
})