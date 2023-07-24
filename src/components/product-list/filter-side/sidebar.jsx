import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPriceFilter,removePriceFilter,setAuthorFilter,removeAuthorFilter } from '../../../store/reducers/booksSlice';
import { useTranslation } from 'react-i18next';
import "./sidebar.css";

const Filter = () => {
  const { t } = useTranslation();


  const authors = useSelector((state) => state.authors);
  // console.log('authors-------?',authors);
  //============================================//
  const dispatch = useDispatch();

  const handelSelectedPrice = (event) =>{
    const price = event.target.value; 
    const isChecked = event.target.checked;
    console.log('SelectedPrice:', price);
    
    if (isChecked) {
      dispatch(addPriceFilter(price)); 
    
    }else if(!isChecked){
      dispatch(removePriceFilter(price)); 
    }
    console.log('Checkbox checked:', event.target.checked);
  }
//============================================//
 
  
  //Btn-Collaps
  const [isClick, setClick] = useState("false");
  const handleclick = () => {
    setClick(!isClick);
  };

 //=============get selected Auther ================//
  // const [filterById, setFilterById] = useState([]);

  const  handelSelectedAuther = (event) => {
    const auther = event.target.value; 
    const isChecked = event.target.checked;
    console.log('SelectedAuthor:', auther);
    
    if (isChecked) {
      dispatch(setAuthorFilter(auther)); 
    }else if(!isChecked){
      dispatch(removeAuthorFilter(auther)); 
    }
    console.log('Checkbox checked:', event.target.checked);
};

  return (
    <>
      <ul className="list-group col-3 ">
        <h3>{t('product-list.filter.title')}</h3>
        <hr />
        <br />
        {/* filter by Price */}
        <div>
          <div className="d-flex justify-content-between">
            <h5>{t('product-list.filter.t-price')}</h5>
            <i
              className={isClick ? "bi bi-plus" : "bi bi-dash"}
              onClick={handleclick}
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample1"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            ></i>
          </div>
          <hr />
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <li className="list-group-item">
              <input className="form-check-input mx-2"
                type="checkbox"
                id='0-49'
                value='0-49'
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor=''>
                {t('product-list.filter.p1')}
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input mx-2"
                type="checkbox"
                id='50-100'
                value='50-100'
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor=''>
                {t('product-list.filter.p2')}
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input mx-2"
                type="checkbox"
                id='100-199'
                value='100-199'
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor=''>
                {t('product-list.filter.p3')}
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input mx-2"
                type="checkbox"
                id='200-299'
                value='200-299'
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor=''>
                {t('product-list.filter.p4')}
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input mx-2"
                type="checkbox"
                id='300-1000'
                value='300-1000'
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor=''>
                {t('product-list.filter.p5')}
              </label>
            </li>
          </div>
        </div><br/><br/> 
         {/* filter by author */}
        <div>
          <div className="d-flex justify-content-between">
            <h5>{t('product-list.filter.t-author')}</h5>
            <i
              className={isClick ? "bi bi-plus" : "bi bi-dash"}
              onClick={handleclick}
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            ></i>
          </div>
          <hr />
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            {authors.map((author) => {
              return (
                // console.log('wwwwwwwwwwwwwww',author.name),
                <li className="list-group-item" key={author._id}>
                  <input
                    className="form-check-input mx-2"
                    type="checkbox"
                    id={author._id}
                    value={author.name}
                    onChange={handelSelectedAuther}
                     />
                  <label className="form-check-label" htmlFor={author.name}>
                    {author.name}
                  </label>
                </li>
              );
            })}
          </div>
        </div>
      </ul>
    </>
  );
};

export default Filter;
