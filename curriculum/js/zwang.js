//自己封装的js库
(function $(){
    "use strict"//严格模式

    if(!window.zwang){//命名空间,假如没有zwang这个命名空间就生成一个
    window.zwang = {};
    }

    // 获取id的Dom元素
    function $(id){
        if(typeof id !='string'){throw new Error("传入的id必须是字符串");}
        const dom =  document.getElementById(id);
        if(!dom){throw new Error("dom对象没找到");}
        return dom;
    }
    window.zwang.$ = $;

    // 创建元素,node节点
    function createEl(node){
        return document.createElement(node);
    }
    window.zwang.createEl = createEl;


    //设置节点的属性
    function setAttr(node,styles){
        for(let key in styles){
            // console.log(styles);
            // console.log(key);
            // console.log(styles[key]);
            node.setAttribute(key,styles[key]);        
        }    
    }
    window.zwang.setAttr = setAttr;

    //获取节点属性
    function getAttr(node,attr){
        return node.getAttribute(attr);
    }
    window.zwang.getAttr = getAttr;
}
)()

//window 全局作用域
//作用域：在作用域外部无法访问作用域内部的方法和变量
//自动执行函数，第1，防止变量和方法污染环境，不会对全局环境造成污染，第2：防止造成第三方库的错误冲突