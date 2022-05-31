import './index.css'
function FormSearchOrder({ showInput, handleClick, phoneOrEmail, setPhoneOrEmail, handleSubmit }) {
    const inputPhone = (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">SDT</span>
            <input type="text" value={phoneOrEmail.phone} onChange={(e) => setPhoneOrEmail((prev) => {
                return { ...prev, phone: e.target.value }
            })
            } className="form-control" placeholder="0905xxxxx" aria-label="Phone" aria-describedby="addon-wrapping" />
        </div>
    )
    const inputEmail = (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" value={phoneOrEmail.email} onChange={(e) => setPhoneOrEmail((prev) => {
                return { ...prev, email: e.target.value }
            })
            } className="form-control" placeholder="email@gmail.com" aria-label="Email" aria-describedby="addon-wrapping" />
        </div>
    )
    let inputElm
    switch (showInput) {
        case 'phone':
            inputElm = (
                <div>
                    {inputPhone}
                </div>
            )
            break;
        case 'email':
            inputElm = (
                <div>
                    {inputEmail}
                </div>
            )
            break;
        case 'both':
            inputElm = (
                <div>
                    {inputPhone}
                    <br />
                    {inputEmail}
                </div>
            )
            break;
        default:
        // code block
    }
    return (
        <div className="form-search-order row">
            <h6 className="text-center">
                <span style={{ paddingRight: "10px" }}>
                    <i className="fa-solid fa-magnifying-glass"> </i>
                </span>
                Kiểm tra đơn hàng của bạn
            </h6>
            <div>
                <label className="check-order-text">
                    <span className="tieu-de-lua-chon"> Kiểm tra bằng </span>
                </label>
            </div>
            <form className="" onSubmit={e => handleSubmit(e)}>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="phone"
                        onChange={handleClick}
                        checked={showInput === "phone" ? true : false}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Số điện thoại
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="email"
                        onChange={handleClick}
                        checked={showInput === "email" ? true : false}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Email
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="both"
                        onChange={handleClick}
                        checked={showInput === "both" ? true : false}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">
                        SDT và Email
                    </label>
                </div>
                <hr />
                {inputElm}
                <div className="pt-2 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary text-end">
                        Kiểm tra
                    </button>
                </div>
            </form>

        </div>
    );
}
export default FormSearchOrder
