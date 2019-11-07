import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import google_logo from './google_logo.png';
import menu_icon from './menu_icon.png';
import searchbar from './searchbar.png';

function App() {
  return (
    <div>
        <div className="Module-header-main">
          <a className="Module-header-content-text" href="/">
            Gmail
          </a>
          <a className="Module-header-content-text" href="/">
            이미지
          </a>
          <img src={menu_icon} className="Module-header-content-img" />
          <a className="Module-header-content-login" href="/">
            로그인
          </a>
        </div>
        <div className="Module-image-div">
          <img src={google_logo} className="Module-image" />
        </div>
        <div>
          <span className="Module-search">
            <img src={searchbar} className="Module-search-main" />
            <input
              className="Module-search-input"
              name="searchContent"
            />
          </span>
        </div>
        <div className="Module-button-div">
          <button
            className="Module-button"
          >
            Google 검색
          </button>
          <span className="Module-button-blank" />
          <button size="sm" className="Module-button" variant="secondary">
            I'm Feeling Lucky
          </button>
        </div>
        <div className="Module-footer-main">
          <a className="Module-footer-korea">대한민국</a>
        </div>
        <div className="Module-footer-main-bottom">
          <a className="Module-footer-advert">광고</a>
          <a className="Module-footer-advert">비즈니스</a>
          <a className="Module-footer-advert">Google 정보</a>
          <a className="Module-footer-advert">검색의 원리</a>
          <span className="Module-footer-right">
            <a className="Module-footer-right-text">개인정보 처리방침</a>
            <a className="Module-footer-right-text">약관</a>
            <a className="Module-footer-right-text">설정</a>
          </span>
        </div>
      </div>

  );
}

export default App;
