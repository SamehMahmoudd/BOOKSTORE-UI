import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";

const Filter = () => {
  const authors = useSelector((state) => state.authors);

  // useEffect(() => {
  //   getAuthors()
  //     .then((data) => {
  //       dispatch(setAuthors(data))
  //     })
  //     .catch((err) => {
  //       console.log('error in getting authors', err)
  //     })
  // }, [])
  ///////////////////////////////////////////////////
  ///Btn-Collaps
  const [isClick, setClick] = useState("false");
  const handleclick = () => {
    console.log("like");
    setClick(!isClick);
  };
  ////////////////////////////////////////////////////
  ///get selected checked box
  const [filterById, setFilterById] = useState([]);
  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterById([...filterById, event.target.value]);
      console.log(event.target.value);
    } else {
      setFilterById(
        filterById.filter((filter) => filter !== event.target.value)
      );
      // console.log(event.target.value);
    }
  };

  return (
    <>
      <ul className="list-group col-3 text-start">
        <h3>Filter By</h3>
        <hr />
        <br />
        {/* filter by Price */}
        <div>
          <div className="d-flex justify-content-between">
            <h5>Price</h5>
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
              <input className="form-check-input me-2"
                type="checkbox" id='' value='' onChange={filterHandler}/>
              <label className="form-check-label" htmlFor=''>
                Under 50 EGP
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input me-2"
                type="checkbox" id='' value='' onChange={filterHandler}/>
              <label className="form-check-label" htmlFor=''>
                50 EGP - 100 EGP
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input me-2"
                type="checkbox" id='' value='' onChange={filterHandler}/>
              <label className="form-check-label" htmlFor=''>
                100 EGP - 200 EGP
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input me-2"
                type="checkbox" id='' value='' onChange={filterHandler}/>
              <label className="form-check-label" htmlFor=''>
                200 EGP - 300 EGP
              </label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input me-2"
                type="checkbox" id='' value='' onChange={filterHandler}/>
              <label className="form-check-label" htmlFor=''>
                Above 300 EGP
              </label>
            </li>
          </div>
        </div><br/><br/> 
         {/* filter by author */}
        <div>
          <div className="d-flex justify-content-between">
            <h5>Author</h5>
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
                <li className="list-group-item" key={author.id}>
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id={author.surname}
                    value={author.id}
                    onChange={filterHandler} />
                  <label className="form-check-label" htmlFor={author.surname}>
                    {author.surname}
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
