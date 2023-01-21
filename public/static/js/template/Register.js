import { Render } from "../core.js";

export function Register() {
  return Render`
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <h2 class="card-title text-center">Đăng ký <a href="#">tài khoản Vieme</a></h2>
                    <div class="card-body py-md-4">
                        <form _lpchecked="1">
                            <div class="form-group">
                                <input type="text" class="form-control" id="UserName" placeholder="Tên đăng nhập">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Họ và Tên">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email">
                            </div>                                                    
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Mật khẩu">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="confirm-password" placeholder="Nhập lại mật khẩu">
                            </div>
                            <div class="d-flex flex-row align-items-center justify-content-between">
                                <a href="#" class='login__vieme'>ĐĂNG NHẬP</a>
                                <button class="btn btn-primary">Tạo tài khoản</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

