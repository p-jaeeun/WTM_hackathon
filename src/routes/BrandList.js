import React from 'react';
import axios from 'axios';
import Brand from '../components/Brand';
import "./BrandList.css";

class BrandList extends React.Component{
  render() {
    return (
      <section className="container">
        <div className="brand__list">
          <span>브랜드 소개하는 페이지</span>
          <Brand />
        </div>
    </section>
    );
  }
} 

export default BrandList;
