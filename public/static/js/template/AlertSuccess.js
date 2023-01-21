import { Render } from "../core.js";

export function AlertSuccess () {
    return Render`
    <div class="card text-center">
        <div class="card-header">
            Thông báo từ Vieme Event 2023
        </div>
        <div class="card-body">
            <h5 class="card-title">Đã giải cứu 😹 hoàng thượng thành công</h5>
            <p class="card-text">Hoàng thượng gửi lì xì thay lời cảm ơn. Hoàng thượng ̣(Miu) chúc mừng năm mới 2023</p>
            <a href="#" class="btn btn-primary">🧧 Mở lì xì</a>
        </div>
    </div>
    `
}