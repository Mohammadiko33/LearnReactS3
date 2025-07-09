import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import BasketSVG from '../SVGs/Basket2SVG'
import productContext from '../contexts/productContext'

export default function Navbar() {

  const contextData = useContext(productContext)
  const showUserCartHandler = () => contextData.setShowBasket(true)

  return (
    <header className='w100 pf z10 t0 l0 r0 bgblck bsdm'>
      
    <Container className='ptb-7 djspac'>
     <a href="https://t.me/Mohammad_iko" target='_blank' className="navbar_logo_title tnone cred ffpoppins tsrh">mohammad iKO</a>

     <ul className="nav_list dac g1 pnone mnone">
      <li className="nav_listItem lnone"><a href="#" className="nav_listItemLink tnone cwhit">Home</a></li>
      <li className="nav_listItem lnone"><a href="#" className="nav_listItemLink tnone cwhit">about</a></li>
      <li className="nav_listItem lnone"><a href="#" className="nav_listItemLink tnone cwhit">contact-us</a></li>
      <li className="nav_listItem lnone"><a href="#" className="nav_listItemLink tnone cwhit">my-basket</a></li>
     </ul>

     <div className="nav_basketContainer dac">
      <span className="nav_basket__count mr05 fwMedium">{contextData.userCart.length}</span>
      <button onClick={showUserCartHandler} className="nav_basket bgnone onone bnone"><BasketSVG/></button>
     </div>
    </Container>
    </header>
  )
}