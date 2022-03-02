import React from "react";
import Header from "./components/Header";
import "./Home.scss";
import bg from "../assets/bg.png";
import android from "../assets/android_logo.png";
import ios from "../assets/ios_logo.png";
import popular from "../assets/popular.png";
import browsePackages from "../assets/browsePackages.png";
import browsePic1 from "../assets/browsePic1.png";
import browsePic2 from "../assets/browsePic2.png";
import browsePic3 from "../assets/browsePic3.png";
import browsePic4 from "../assets/browsePic4.png";
import book_bg from "../assets/book_bg.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import service1 from "../assets/service1.png";
import services_bg from "../assets/services_bg.png";
import why_us from "../assets/why_us.png";
import covid_bg from "../assets/covid_bg.png";
import covid_badge from "../assets/covid_badge.png";
import journel_bg from "../assets/journel_bg.png";
import travel_journel from "../assets/travel_journel.png";
import shop_product from "../assets/shop_product.png";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";

function ShopCard() {
  return (
    <div className="main__container__shop__content__card">
      <img
        src={shop_product}
        alt="shop_product"
        className="main__container__shop__content__card__img"
      />
      <div className="main__container__shop__content__card__fvrt">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="main__container__shop__content__card__heading">
        The Anti-Wrinkle Serum Shoppers Call 'Magic'
      </div>
      <div className="main__container__shop__content__card__para">
        If you're still exploring the great outdoors this winter, you might
        (literally) be experiencing some
      </div>
      <div className="main__container__shop__content__card__btn__price__position">
        <button
          style={{
            color: "#242424",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          }}
          className="main__container__shop__content__card__btn__price"
        >
          $56
        </button>
      </div>
    </div>
  );
}

export default function ShopScreen() {
  return (
    <>
      <Header />
      <div id="home" className="main__container">
        <img src={bg} alt="" className="main__container__bg" />
        <div className="main__container__overlay">
          <div className="main__container__overlay__sub__heading">
            Explore the world
          </div>
          <div className="main__container__overlay__heading">
            PLAN. SAVE. <br />
            TRAVEL.
          </div>
          <div className="main__container__overlay__para">
            Wave goodbye to all of the typical stress involved in traveling.
            When you rely on Everycation to take care of the logistical details,
            we’ll make sure everything falls into place exactly as it should.
            We’ll get you where you need to be, the way you want it.
          </div>
          <Link to="/basic-info" className="primary__btn">
            Get Started
          </Link>
          <div className="btn__container">
            <img
              style={{ marginTop: 16 }}
              src={android}
              alt="logo"
              className="play__btns"
            />
            <img src={ios} alt="logo" className="play__btns" />
          </div>
        </div>
        <ImageSlider />
      </div>
      <div id="shop" className="main__container__shop">
        <div className="main__container__shop__content__heading">
          Travel <span>Shop</span>
        </div>
        <div className="main__container__shop__content">
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
          <ShopCard path="/shop" />
        </div>
      </div>

      <Footer />
    </>
  );
}
