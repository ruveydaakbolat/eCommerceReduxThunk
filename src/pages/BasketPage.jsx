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

  return (
    <div className="container">
      {state.isLoading && <Loading />}

      {state.isError && (
        <p>Üzgünüz sepet verilerini alırken bir hata oluştu :(</p>
      )}

      {state.basket.map((item) => (
        <BasketItem item={item} key={item.key}/>
      ))}
    </div>
  );
};

export default BasketPage;
