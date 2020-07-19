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
//获取class
const closedialog = document.querySelector('.close-dialog')
const facedel = document.querySelector('.face-del')
// const closedialog = window.zwang.getClassName('close-dialog')
//获取form表单
const infodialog = window.zwang.$('info-dialog');
//获取添加信息按钮
const addInfoButton = window.zwang.getClassName('add-info-button')[0];
//获取头像区域
const faceview = window.zwang.getClassName('face-view')[0];
//获取头像列表区域
const faceviewlist = window.zwang.getClassName('face-view-list')[0];


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


let theadHtml = `<thead>
    <tr>`;

//es6 循环foreach,item数组里面的一组键值对，index索引，arr全部数组
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



/**
 * 列表数据
 */
let tbodyHtml = `<tbody>`;

//生成主体数据
function createTBodyDate(){
    //es5 for
        let trHtml = '';
        for(let i = 0;i < tableTbodyData.length; i++){
            const data = tableTbodyData[i];
        //开始tr
        trHtml += `<tr>`
            
        //头像
        trHtml += createFace(data);
            //姓名
        trHtml += createName(data);
            //性别
        trHtml += creategender(data);      
            //年龄
        trHtml += createAge(data);          
            //手机号
        trHtml += createphone(data);           
            //国籍
        trHtml += createCountry(data);           
            //爱好
        trHtml +=createLike(data);           
            //头衔
        trHtml += createRank(data);          
            //操作
        trHtml += createOpeartion();     
        
        
            //结束tr
            trHtml += `</tr>`
}
    return trHtml;
}

// console.log(tableTbodyData)
tbodyHtml += `${createTBodyDate()}</tboby>`

//生成表头
tableDom.innerHTML = theadHtml+tbodyHtml; //可以用innerHTML插入标签，es6用~~包起来

divDom.appendChild(tableDom);//将tableDom元素附加（插入）到divDom元素

//数组arrary
// const arr = ['aa', 10 , {name : 10} , true , function(){} ]
// console.log(arr[1]);
// console.log(arr[arr.length-1]);

/**
 * ******************添加信息层显示/隐藏*********************************************************************************************
 */
//定义一个方法用来绑定设置信息列表
//以下两行是绑定事件的用法
// addInfoButton.onclick = function(){}
// addInfoButton.addEventListener("click",function(){},false)，这个可以给一个对象绑定多个事件
//打开
window.zwang.addEventListener(addInfoButton,'click',function(){
    infodialog.classList.add('dialog-show')

});
//关闭
window.zwang.addEventListener(closedialog,'click',function(){
    infodialog.classList.remove('dialog-show')

});


/**
 * ******************头像事件处理*********************************************************************************************
 */

window.zwang.addEventListener(faceview,'click',function(){
    handlerFaceList();

});
//创建img对象
const createImg = window.zwang.createEl('img');
window.zwang.addEventListener(faceviewlist,'click',function(e){
    let nodeName = e.target.nodeName.toLowerCase();
    
    if(nodeName ==='li'){
        // const img = window.zwang.getTagName(e.target,'img')[0];
        const img = window.zwang.getChild(e.target);
        console.log(img)
        let src = img.src;
        createImg.src = src;
    }
    if(nodeName ==='img'){
        createImg.src = e.target.src;
    }
    window.zwang.addChild(faceview,createImg);


});
// window.zwang.addEventListener(facedel,'click',function(e){
//     createImg.remove('src');
//     console.log(createImg.src)
// });

function handlerFaceListCallback(data){
    const requestDate = data.data;
    let liHtml =``;
    //for of
    for(let key of requestDate){
        //可以终止break和跳过continue
        
       liHtml +=`<li><img src="${key}" alt=""></li>` 
       
    }
    faceviewlist.innerHTML = liHtml;

    
}

























