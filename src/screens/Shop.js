import React, { useState } from "react";
import ShopCard from "./components/ShopCard";
import bg from "../assets/bg.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function FilterBtn({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "search__result__container__select__box___btn search__result__container__select__box___btn__select"
          : "search__result__container__select__box___btn"
      }
    >
      {title}
    </button>
  );
}

function RangeInput() {
  const [value, onChange] = useState(1);
  return (
    <div className="search__result__container__vacancies-filter-panel-input-range">
      <input
        type="range"
        className="search__result__container__vacancies-filter-panel-input-range-input"
        min="1"
        max="30"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <div className="search__result__container__vacancies-filter-panel-input-range-buble">
        {value} km
      </div>
    </div>
  );
}

export default function Shop() {
  const [isDistance, setIsDistance] = useState(false);
  const [select, setSelect] = useState("Travel Bags");

  const DistanceEntry = [
    {
      title: "140 km",
    },
    {
      title: "200 km",
    },
    {
      title: "280 km",
    },
  ];
  return (
    <>
      <Header />
      <div className="search__job__container">
        <img src={bg} alt="bg" className="search__job__container__img" />
        <div className="search__job__container__overlay">
          <div className="search__job__container__content">
            <div className="search__job__container__content__search__wrapper">
              <input
                type="text"
                placeholder="Search Category Here"
                className="search__job__container__content__search__input"
              />

              <button className="search__job__container__content__btn">
                <svg
                  id="Search"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                >
                  <rect
                    id="Rectangle_693"
                    data-name="Rectangle 693"
                    width="27"
                    height="27"
                    fill="none"
                  />
                  <path
                    id="Path_208"
                    data-name="Path 208"
                    d="M26.9,24.531l-5.583-5.583a11.584,11.584,0,0,0,2.369-7.106A11.77,11.77,0,0,0,11.843,0,11.77,11.77,0,0,0,0,11.843,11.77,11.77,0,0,0,11.843,23.686a11.584,11.584,0,0,0,7.106-2.369L24.531,26.9ZM3.384,11.843a8.377,8.377,0,0,1,8.459-8.459A8.377,8.377,0,0,1,20.3,11.843,8.377,8.377,0,0,1,11.843,20.3,8.377,8.377,0,0,1,3.384,11.843Z"
                    fill="#fbfbfb"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="search__job__container__searches__content">
        <form className="search__result__container__vacancies-filter-panel">
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-heading">
              Filter
            </div>
            <button
              type="reset"
              className="search__result__container__vacancies-filter-panel-heading-row-btn"
            >
              Remove all
            </button>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-sub-heading">
              Category
            </div>
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <input
              type="text"
              placeholder="Search Category"
              className="search__result__container__vacancies-filter-panel-input"
            />
          </div>
          {/* <div className="search__result__container__vacancies-filter-panel-row">
            <RangeInput />
          </div> */}
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-info">
              Max 30 Kilometres
            </div>
          </div>
          <div className="search__result__container__select__box">
            <FilterBtn
              title="Travel Bags"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn
              title="Accessories"
              select={select}
              setSelect={setSelect}
            />
            <FilterBtn title="Journals" select={select} setSelect={setSelect} />
            <FilterBtn title="Maps" select={select} setSelect={setSelect} />
            <FilterBtn
              title="Gift Cards
"
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="search__result__container__vacancies-filter-panel-catagory">
            <div className="search__result__container__vacancies-filter-panel-catagory-container">
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-6"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-6">Travel Bags</label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-7"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-7">Gift Cards</label>
              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-8"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-8">Maps</label>

              <input
                className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                id="styled-checkbox-10"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-10">Journals</label>
            </div>
          </div>
        </form>
        <div className="search__job__container__searches__content__right">
          <div className="search__job__container__searches__content__right__top">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
          <div className="search__job__container__searches__content__right__bottom">
            <button className="search__job__container__searches__content__right__btn">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
