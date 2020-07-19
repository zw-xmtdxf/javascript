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

    //获取className对象
    function getClassName(className){
        return document.getElementsByClassName(className);
    }
    window.zwang.getClassName = getClassName;

    //获取标签对象
    function getTagName(parentTag,target){
        return parentTag.getElementsByTagName(target);
    }
    window.zwang.getTagName = getTagName;

    //获取标签对象(第一层)
    function getChild(parentTag){
        return parentTag.children;
    }
    window.zwang.getChild = getChild;


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

    //addEventListener 参数 domNode节点对象 eventType事件类型  函数handlerFunction 
    function addEventListener(domNode,eventType,handlerFunction){
        if(window.addEventListener){
            domNode.addEventListener(eventType,handlerFunction)
        }else{
            domNode.attachEvent("on`${eventType}`",handlerFunction);
        }
         
    }
    window.zwang.addEventListener = addEventListener;

    //removeEventListener 参数 domNode节点对象 eventType事件类型  函数handlerFunction 
    function removeEventListener(domNode,eventType,handlerFunction){
        if(window.removeEventListener){
            domNode.removeEventListener(eventType,handlerFunction)
        }else{
            domNode.detachEvent("on`${eventType}`",handlerFunction);
        }
         
    }
    window.zwang.removeEventListener = removeEventListener;


//window 全局作用域
//作用域：在作用域外部无法访问作用域内部的方法和变量
//自动执行函数，第1，防止变量和方法污染环境，不会对全局环境造成污染，第2：防止造成第三方库的错误冲突~

//添加子节点到父级的末尾
function addChild(parentNode,childNode){
    parentNode.appendChild(childNode);     
}
window.zwang.addChild = addChild;






