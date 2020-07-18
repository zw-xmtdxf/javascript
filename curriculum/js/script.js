"use strict";//严格模式


    //jquery$('#aaaa)
    //封装自己的工具库，必备
    // function $(id){
    //     const Dom = document.getElementById(id);

    //     return Dom;//返回值，谁调用了方法，值就返回给谁，不包含闭包的概念
    // }

    // 函数表达式必须先定义后使用，没有函数提升的概念
    // const $ = function(id){
    //     return document.getElementById(id);
    // }

    // let name = '张三';
    // console.log(typeof name);typeof 用于检测基本数据类型

//获取Div
const divDom = window.zwang.$('container-wrap');//获取指定id的Dom元素

const tableDom = window.zwang.createEl('table');//创建table元素、创建DOM元素

const styles ={
    'width':'100%',
    'border':'0',
    'cellpadding':'0',
    'cellspacing':'0',
    'id':'table-data-wrap',
}

window.zwang.setAttr(tableDom,styles)//记得调用
    // setAttr(tableDom,'width','100%');
    // setAttr(tableDom,'border','0');
    // setAttr(tableDom,'cellpadding','0');
    // setAttr(tableDom,'cellspacing','0');
    // setAttr(tableDom,'id','table-data-wrap');
    //设置属性第一种写法 元素名.setAttribute('属性','属性值')
    // tableDom.setAttribute('width','100%');//设置table属性，宽度100%
    // tableDom.setAttribute('border','0');//设置table属性，边框0
    // tableDom.setAttribute('cellpadding','0');//设置table属性，边距0
    // tableDom.setAttribute('cellspacing','0');//设置table属性，间距0
    // tableDom.setAttribute('id','table-data-wrap');//设置table属性，宽度100%
    // console.log(tableDom);
    //设置属性第二种写法，直接 元素名.属性 = '属性值'
    //tableDom.width = "100%"

const tableTheadData = [
    {label : "头像"},
    {label : "姓名"},
    {label : "性别"},
    {label : "年龄"},
    {label : "手机号"},
    {
        label : "爱好",
        width : 200,
        id : "aaa"
    },
    {label : "头衔"},
    {label : "操作"}
];

let theadHtml = `<thead>
    <tr>`;

//es6 循环foreach
tableTheadData.forEach((item,index,arr) =>{
    //检测是否存在属性width和id，存在就添加
    let id = item.id? ` id="${item.id}"` :''
    let width = item.width ? ` width="${item.width}"` :'';

    //字符串拼接
    theadHtml += `
    <th${width}${id}>${item.label}</th>`;

})
theadHtml += `
    </tr>
</thead>`;

//生成表头
tableDom.innerHTML = theadHtml; //可以用innerHTML插入标签，es6用~~包起来


console.log(theadHtml);

divDom.appendChild(tableDom);//将tableDom元素附加（插入）到divDom元素

//数组arrary
// const arr = ['aa', 10 , {name : 10} , true , function(){} ]
// console.log(arr[1]);
// console.log(arr[arr.length-1]);












