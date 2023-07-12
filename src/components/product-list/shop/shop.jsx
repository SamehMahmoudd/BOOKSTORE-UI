import React from 'react'
import Filter from '../filter-side/sidebar'
import Product from '../product/product'
import { NavLink } from 'react-router-dom'
import Sort from '../sort/sort'
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/home" className="nav-link">{t('product-list.shop.home')}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/category" className="nav-link">{t('product-list.shop.store')}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t('product-list.shop.title')}
          </li>
        </ol>
      </nav>

      <div className="heading d-flex flex-column align-items-center mb-5">
        <div>
          <h1>{t('product-list.shop.title')}</h1>
        </div>
        <div className="small"></div>
      </div>
      
      <div className="container">
        <div className="row gx-lg-4">
          <Filter />
          <div className="row row-cols-md-2 row-cols-lg-3  row-cols-1 col-9 px-5">
            <Sort/>
            <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop ;
