'use strict';
import { Render } from "../core.js";

var Slot_1 = [], Slot_2 = [], Slot_3 = [], Slot_4 = [];
function Input () {
    for (var i = 0; i < 10; i++)
        Slot_1.push('A');
    for (var i = 0; i < 3; i++)
        Slot_2.push('B');
    for (var i = 0; i < 1; i++)
        Slot_3.push('C');
    Slot_4.push('D');
    var Slot = [];
    Slot = Slot_1.concat(Slot_2, Slot_3, Slot_4);
    Slot = Slot.sort(() => Math.random() - 0.5)
    var index = Math.floor(Math.random() * (10 + 1)) + 0;
    return Slot[index];
}

function Money (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function RandomMoney (Type) {
    if (Type === 'A')
        return Money(10000, 30000);
    else if (Type === 'B')
        return Money(30000, 50000);
    else if (Type === 'C')
        return Money(50000, 100000);
    else
        return Money(100000, 200000);
}

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export function OpenLixi () {
    return Render`
        <div>
            <audio autoplay>
                <source src="static/media/y2meta.com - ABBA - Happy New Year (Video) (320 kbps).mp3" type="audio/ogg">
                <source src="static/media/y2meta.com - ABBA - Happy New Year (Video) (320 kbps).mp3" type="audio/mpeg">
            </audio>
            <div>
                <h3 class="openlixi__title">Nhận lì xì may mắn đầu năm từ</h3>
                <div class="user__lixi">
                    <div class="avatar">
                        <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/287601435_736760270783578_7210911531003606955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=cD4M1SaQULIAX9WnGL_&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAkDBqhgirlX8HnPfIDdfHGqKk2D_SeKnDJgvoS4vr4DQ&oe=63CF394A" alt="tree">
                    </div>
                    <span class="name__user">Nguyễn Văn Tín</span>
                </div>
                <h3 class="money">${VND.format(RandomMoney(Input()))}</h3>
                <div class="box__card">
                    <div class="pragraph">
                        <h3 class="header__card">Thiệp HAPPY TẾT quý mão 2023</h3>
                        <div class="body__card">
                            <p class="gift__litte" align="center">Năm Quý Mão tới</p>
                            <p class="gift__litte" align="center">Ai cũng giàu to</p>
                            <p class="gift__litte" align="center">Sức khỏe chẳng lo</p>
                            <p class="gift__litte" align="center">Buồn bực xếp xó</p>
                            <p class="gift__litte" align="center">Khó khăn chuyện nhỏ</p>
                            <p class="gift__litte" align="center">Việc chạy ro ro</p>
                            <p class="gift__litte" align="center">Không còn nhăn nhó</p>   
                            <p class="gift__litte" align="center">Muốn gì được đó!</p>
                        </div
                    </div>
                </div>
                <div class="footer">
                    <img src="assets/img/image-removebg-preview (4).png" alt="backround">
                </div>
            </div>
        </div>
    `
}