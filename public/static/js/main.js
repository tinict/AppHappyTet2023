'use strict'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { Render } from "./core.js";
import { Lixi } from "./template/Lixi.js";
import { Login } from "./template/Login.js";
import { Register } from "./template/Register.js";
import { OpenLixi } from "./template/OpenLixi.js";
import { AlertSuccess } from "./template/AlertSuccess.js";

const firebaseConfig = {
    "projectId": "viemelogin-demo",
    "appId": "1:494346318634:web:1cb61533d3614b3f332453",
    "databaseURL": "https://viemelogin-demo-default-rtdb.asia-southeast1.firebasedatabase.app",
    "storageBucket": "viemelogin-demo.appspot.com",
    "locationId": "asia-east2",
    "apiKey": "AIzaSyC2bRRDGFl-6z0aUAF4o8RQD5hYEdikyt4",
    "authDomain": "viemelogin-demo.firebaseapp.com",
    "messagingSenderId": "494346318634",
    "measurementId": "G-8N2B98KW98"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const store = firebase.firestore();

function RegisterAccountVieme() {
    const ElementButtonRegister = document.querySelector('.btn-primary');

    ElementButtonRegister.onclick = () => {
        const ElementUserName = document.getElementById('UserName');
        const ElementFullName = document.getElementById('name');
        const ElementEmail = document.getElementById('email');
        const ElementPassword = document.getElementById('password');
        const ElementConfirmPassword = document.getElementById('confirm-password');
        const setAvatar = 'https://o.vdoc.vn/data/image/2022/11/17/hinh-nen-meo-13.jpg';
        function createUser(User, FullName, Email, Password, Avatar) {
            const obj__Account = new Object();
            obj__Account.User = User;
            obj__Account.FullName = FullName;
            obj__Account.Email = Email;
            obj__Account.Password = Password;
            obj__Account.Avatar = Avatar;
            return obj__Account;
        }
        if (ElementPassword.value === ElementConfirmPassword.value) {
            const CreateAccount = createUser(ElementUserName.value, ElementFullName.value, ElementEmail.value, ElementPassword.value, ElementConfirmPassword.value, setAvatar);
            console.log(CreateAccount);
            store.collection("AccountUser").add(CreateAccount);
            alert("Tài khoản đã tạo thành công!");
            ElementUserName.value = "";
            ElementFullName.value = "";
            ElementPassword.value = "";
            ElementEmail.value = ""
            ElementConfirmPassword.value = "";
        }
        else
            alert("Tài khoản tạo không thành công!")
    }
}

function ClickLogin () {
    const ElementBTNLogin = document.querySelector('.btn1');
    function CheckLogin () {
        store.collection("AccountUser").get().then((data) => {
            const ElementUser = document.getElementById('user');
            const ElementPassword = document.getElementById('pwd');
            var flag = false;
            data.docs.forEach(element => {
                if(element.data().User == ElementUser.value) {
                    if (element.data().Password == ElementPassword.value) {
                        alert('Đăng nhập thành công!');
                        flag = true;
                    }
                }
            });
            if(flag == false)
                alert('Nhập sai tài khoản hoặc mật khẩu!');
        });
    }
    ElementBTNLogin.onclick = () => {
        var User = "";
        store.collection("AccountUser").get()
        .then((data) => {
            const ElementUser = document.getElementById('user');
            const ElementPassword = document.getElementById('pwd');
            var flag = false;
            data.docs.forEach(element => {
                if(element.data().User == ElementUser.value) {
                    if (element.data().Password == ElementPassword.value) {
                        alert('Đăng nhập thành công!');
                        const FullName = element.data().FullName;
                        const MessageBox = 'Chúc Mừng Năm Mới 2023 ' + FullName;
                        alert(MessageBox)
                        User = element.data().User;
                        flag = true;
                        const root  = document.getElementById('root');
                        root.innerHTML = Lixi(element.data().avatar);
                        const ElementBody = document.querySelector('body');
                        ElementBody.style.backgroundImage = 'url(' + 'https://storage.needpix.com/rsynced_images/christmas-snowflakes-background.jpg)';
                        ElementBody.style.backgroundSize = 'cover';
                        const ElementBTNLixi = document.querySelector('.btn__Lixi')
                        const ElementMyBar = document.getElementById('myBar');
                        var load = 0;
                        var width = 0;
                        ElementBTNLixi.onclick = () => {
                            load = Math.floor(Math.random() * ((101 - width) - 0)) + 0;
                            width = width + load;
                            ElementMyBar.style.width = width + "%";
                            console.log(width);
                            if (width == 100 ) {
                                const ElementMessage = document.getElementById("message");
                                ElementMessage.innerHTML = AlertSuccess();
                                ElementMessage.style.display = "block";
                                const ElementBTNPrimary = document.querySelector(".btn-primary");
                                ElementBTNPrimary.onclick = () => {
                                    var Check = false;
                                    store.collection("Cash").get()
                                    .then((data_Cash) => {
                                        data_Cash.docs.forEach(element => {
                                            if (element.data().User == User)
                                                Check = true;
                                            console.log(Check);
                                        })
                                        console.log(Check);
                                        if (Check == false) {
                                            root.innerHTML = OpenLixi ();
                                            const ElementMoney = document.querySelector(".money");
                                            function createCash_User(User, Money) {
                                                const obj__Cash = new Object();
                                                obj__Cash.User = User;
                                                obj__Cash.Money = Money;
                                                return obj__Cash;
                                            };
                                            const CreateCash = createCash_User(User, ElementMoney.textContent);
                                            store.collection("Cash").add(CreateCash);
                                        }
                                        else {
                                            alert('Bạn đã mở bao lì xì.');
                                        }
                                    });
                                    ElementBody.style.backgroundImage = 'url(' + 'https://static.vecteezy.com/system/resources/previews/001/236/997/original/simple-and-beautiful-chinese-pattern-vector.jpg)';
                                    ElementBody.style.backgroundSize = 'cover';
                                }
                            }
                        }
                    }
                }
            });
            if(flag == false)
                alert('Nhập sai tài khoản hoặc mật khẩu!');
        });
    }
}

export function Main(setLogin, setRegister) {
    return Render`
        <div class='box-container'>
            <div class='compenent__login'>${setLogin && Login()} ${setRegister && Register()}</div>
        </div>
    `
}

const root  = document.getElementById('root');
root.innerHTML = Main(true, false);

const CallOnclick = () => {
    const ElementLinkRegister = document.querySelector('.dnthave');
    ClickLogin();
    ElementLinkRegister.onclick = () => {
        root.innerHTML = Main(false, true);
        RegisterAccountVieme();
        const ElementLinkLogin = document.querySelector('.login__vieme');
        ElementLinkLogin.onclick = () => {
            root.innerHTML = Main(true, false);
            CallOnclick(); 
        } 
    }
}

CallOnclick();
