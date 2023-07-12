import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './category.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../services/categoryService'
import { setCategories } from '../../../store/reducers/categorySlice'
import { useTranslation } from 'react-i18next'

const Category = () => {
  const categories = useSelector((state) => state.categories)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   getCategories()
  //     .then((data) => {
  //       console.log('getting categories from db', data)
  //       dispatch(setCategories(data))
  //     })
  //     .then((err) => {
  //       console.log('err getting categories data', err)
  //     })
  // }, [])
  //////////////////////////////////////////////////////
  const { t } = useTranslation();

  return (
    <div id="store">
      <div className="heading d-flex flex-column align-items-center" id="Store">
        <div><h1>{t('home.category.title')}</h1> </div><div className="small"></div>
      </div>
      <section className="container mb-5">
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
          {categories.map((cat) => {
            return (
              <div className="col" key={cat.id}>
                <div className="card text-bg-dark">
                  <img src="/assets/img/back-store.jpg" className="card-img" alt="..."/>
                  <div className="card-img-overlay text-center">
                    <p className="card-text">{cat.num_books} {t('home.category.num-text')}</p>
                    <Link to={`/store`}>
                      <button
                        type="button"
                        className="btn btn-outline-light position-absolute top-50 start-50 translate-middle">
                        <a target="_blank">{t('home.category.btn')}</a>
                      </button>
                    </Link>
                    <h5 className="card-title position-absolute bottom-0 start-50 translate-middle-x p-2">{cat.name}</h5>
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Category;
