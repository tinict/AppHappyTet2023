'use strict'
import { Render } from "../core.js";

export function Lixi (avatar) {
    return Render`
        <div class="container__lixi-box">
            <div class="user__join">
                <div class="container">
                    <div class="avatar">
                        <img src="${avatar}" alt="tree">
                    </div>
                    <div class="title">
                        <h3>GIẢI CỨU HOÀNG THƯỢNG</h3>
                    </div>
                </div>
            </div>
            <div class="tree__gold">
                <img src="assets/img/image-removebg-preview (2).png" alt="tree">
                <div class="catch__cat">
                    <img class="cat" src="assets/img/cat.png" alt="cat">
                </div>
            </div>
            <div class="box__loading">
                <div id="myProcess">
                    <div id="myBar"></div>
                </div>
            </div>
            <div class="btnLixi__container">
                <button type="button" class="btn__Lixi bubbly-button">Giải cứu ngay</button>
            </div>
            <div id="message"></div>
        </div
    `
}