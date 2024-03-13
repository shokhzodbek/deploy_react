import { useEffect, useState } from "react";
import "./Header.css";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { FaOpencart } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
// let menu = [
//   {
//     id: 1,
//     name: "Smartphone va gadget",
//     icon: <MdPhoneAndroid />,
//     subminu: [
//       { id: 1, name: "Smartfon" },
//       { id: 2, name: "Telefon" },
//       { id: 3, name: "Planshit" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Televizor va audio",
//     subminu: [
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Texnika dlya kuxniy",
//     subminu: [
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//       { id: 1, name: "" },
//     ],
//   },
// ];
function SearchProduct({ image, title }) {
  return (
    <>
      <div className="search-product">
        <img src={image} alt="" width={60} />
        <p>{title}</p>
      </div>
    </>
  );
}
function Header() {
  const [ochil, setOchil] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  function opens() {
    setOchil(!ochil);
  }
  function getSearch() {
    if (value != "") {
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((r) => setData(r));
    }
  }
  useEffect(() => {
    getSearch();
  }, [value]);
  console.log(data?.products);
  return (
    <div className="header">
      <button
        onClick={opens}
        style={{
          backgroundColor: ochil ? " rgba(232, 123, 123,.3)" : "rgb(207, 5, 5)",
          color: ochil ? "red" : "#fff",
        }}
      >
        {ochil ? (
          <span>
            <MdOutlineClose fontSize={14} />
          </span>
        ) : (
          <span>
            <FiMenu fontSize={14} />
          </span>
        )}
        Kategoriya
      </button>
      <div className="input-search">
        <input
          type="text"
          placeholder="Qidirish"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="search-icon">
          {" "}
          <CiSearch />
          {value != "" ? (
            <div className="input-block">
              {data?.products?.length > 0 ? (
                <>
                  {" "}
                  <div className="input-box">
                    {data?.products?.slice(0, 3)?.map((item) => {
                      return (
                        <SearchProduct
                          key={item.id}
                          title={item.title}
                          image={item.thumbnail}
                        />
                      );
                    })}
                    <a style={{ color: "black" }} href="#">
                      Kuproq kurish
                    </a>
                  </div>
                </>
              ) : (
                <h1 style={{ color: "black" }}>Product topilmadi</h1>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="icons">
        <div className="icon">
          <GoHeartFill />
        </div>
        <div className="icon">
          <FaOpencart />
        </div>
      </div>

      {ochil ? (
        <div className="container-menu">
          <div className="container-grid">
            <ul>
              <li>
                <MdPhoneAndroid />
                <span>Smartfon va gadjetlar</span>
                <MdArrowForwardIos />
              </li>
              <li>
                <MdPhoneAndroid />
                <span>Smartfon va gadjetlar</span>
                <MdArrowForwardIos />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
