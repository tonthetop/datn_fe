import { useSelector, useDispatch } from "react-redux";
import RowItemCheckout from "./RowItemCheckout";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { orderApi } from "../../api";
import { cartsAction } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function OrderListItem({ checkedDelivery, infoOrder }) {
  const { carts } = useSelector((state) => state);
  const amountTotal = carts.reduce((acc, item) => acc + item.amount, 0);
  const priceTotal = carts
    .reduce((acc, item) => {
      const priceOrigin =
        item.discountValue !== ""
          ? item.price * (1 - item.discountValue / 100) * item.amount
          : item.price * item.amount;
      return acc + priceOrigin;
    }, 0)
    .toLocaleString();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (
      checkedDelivery &&
      (!infoOrder.hasOwnProperty("bankCode") || infoOrder.bankCode !== "")
    ) {
      infoOrder.productList = carts.map((e) => {
        const discount =
          e.discountId !== ""
            ? {
                discountId: e.discountId,
                discountValue: e.discountValue,
                discountCode: e.discountCode,
              }
            : {};
        return {
          productId: e._id,
          size: e.size,
          amount: e.amount,
          price: e.price,
          ...discount,
        };
      });
      try {
        if (infoOrder.orderType === "PAYONL") {
          const result = await orderApi.add(infoOrder);
          console.log("result payment:",result)
          if (result) {
            window.open(result, "_self");
            const action = cartsAction.deleleAllCart();
            dispatch(action);
          }
        } else {
          const result = await orderApi.add(infoOrder);
          if (result) {
            navigate(`/thankyou/${result._id}`);
            const action = cartsAction.deleleAllCart();
            dispatch(action);
          }
        }
      } catch (error) {}
    } else {
      toast.warning("B???n ch??a ??i???n ????? th??ng tin ?????t h??ng");
    }
  };
  return (
    <div className="checkout-radio-wrapper">
      <div className="checkout-list-top">
        <div className="px-3 pt-2">
          <h5>{`????n h??ng (${amountTotal} S???n ph???m)`}</h5>
        </div>
        <div className="checkout-list-item checkout-border-top p-3">
          {carts.map((e, index) => {
            return (
              <div key={index}>
                <RowItemCheckout product={e}></RowItemCheckout>
              </div>
            );
          })}
        </div>
        <div className="checkout-border-top p-3 ">
          <div className="d-flex justify-content-between mb-3">
            <Input className="w-auto" placeholder="Nh???p m?? gi???m gi??" />
            <Button type="primary">??p d???ng</Button>
          </div>
          <div className="checkout-border-top py-2">
            <div className="d-flex justify-content-between">
              <span>T???m t??nh</span>
              <span>{priceTotal} ???</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Ph?? v???n chuy???n</span>
              <span>Mi???n ph??</span>
            </div>
          </div>
          <div className="checkout-border-top py-2">
            <div className="d-flex justify-content-between">
              <span className="fs-5">T???ng c???ng</span>
              <span className="fs-5 text-primary">{priceTotal} ???</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <Link to="/cart">
                <i class="fa-solid fa-angles-left me-2"></i>
                Quay v??? gi??? h??ng
              </Link>
              <Button onClick={handleSubmit} type="primary">
                ?????t h??ng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderListItem;
