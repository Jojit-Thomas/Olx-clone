import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from "../../Store/Context";
import {useNavigate} from 'react-router-dom'
function Header() {
  const {user} = React.useContext(AuthContext)
  const {firebase} = React.useContext(FirebaseContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {
            user ? <span>{user.displayName}</span> : <span onClick={ () => {
              navigate('/login')
            }}>Login</span>
          }
          <hr />
        </div>
        {user ? <span onClick={ () => {
          firebase.auth().signOut();
          navigate('/login')
        }}>Logout</span> : null}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={() => navigate('/create')}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
