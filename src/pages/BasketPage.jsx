import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);

  useEffect(() => {
    dispatch(setBasketLoading());
    dispatch(getBasketData());
  }, []);

  const total_count = state.basket.reduce(
    (total, item) => total + item.adet * item.fiyat,
    0
  );

  return (
    <div className="row px-4 py-5">
      {state.isLoading && <Loading />}

      {state.isError && (
        <p>Üzgünüz sepet verilerini alırken bir hata oluştu :(</p>
      )}

      <div className="col-md-8">
        {state.basket.length > 0 ? (
          state.basket.map((item) => <BasketItem item={item} key={item.key} />)
        ) : (
          <p className="my-5 text-center">
            Öncelikle sepete bir ürün ekleyiniz...
          </p>
        )}
      </div>

      <div className="d-flex flex-column justify-content-start align-items-start col-md-4">
        <div className="w-100 bg-white text-black p-5 rounded">
          <h5 className="text-center">Toplam Tutar: {total_count}</h5>
          <button className="btn btn-primary w-100 my-2">
            Alışverişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
