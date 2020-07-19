//生成头像
function createFace(data){
    let html= `<td>
                <div class="face">
                    <span class="gender icon-${data.face.gender}"></span>
                    <img src="${data.face.img}" alt="">
                </div>
            </td>`
    return html;
}

//生成姓名
function createName(data){
    let html= `<td>
                    <div class="people-name">
                        <h4 class="name">${data.name.trueName}</h4>
                        <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
                    </div>
                </td>`
    return html;
}

//生成性别
function creategender(data){
    let html= `<td>
                        <div class="gender-wrap">
                            <span class="gender icon-girl ${data.face.gender === 'girl' ? '':'option-05'}"></span>
                            <span class="gender icon-boy ${data.face.gender === 'boy' ? '':'option-05'}"></span>
                        </div>
                    </td>`
    return html;
}

//生成年龄
function createAge(data){
    let html= `<td>
                    <div class="age text-center">
                        <p>${data.age.number}</p>
                        <span class="option-05 fs-12">（单身狗）</span>
                    </div>
            </td>`
    return html;
}

//生成手机号
function createphone(data){
    let html= `<td>
                    <div class="phone">
                    ${data.phone.code}<span class="option-05">（中国）</span><br />
                    ${data.phone.number}
                    </div>
                </td>`
    return html;
}

//生成国籍
function createCountry(data){
    let html= `<td>
                <div>
                    <img src="${data.country.National_flag}" alt="${data.country.name}">
                    <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                </div>
            </td>`
    return html;
}

//生成爱好
function createLike(data){
    //循环
    let likeHtml = ``;
    data.like.forEach((item) =>{likeHtml +=`<span style="background-color: ${item.color};">${item.tag}</span>`});
    let html= `<td>
                <div class="likes">
                ${likeHtml}
                </div>
            </td>`
    return html;
}

//生成头衔
function createRank(data,number = ''){
    // const NUMBER = 16.66666//常量不可改，用大写
    let num = number == ''? 16.66666:number;
    let html= `<td>
                <div class="grade">
                    <span class="role-name">${data.rank.name}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width:${data.rank.level*num}%;"></div>
                    </div>
                </div>
            </td>`
    return html;
}

//生成操作
function createOpeartion(){

    let html= `<td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
            </td>`
    return html;
}