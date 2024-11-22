import './App.css';
import {amountSold} from "../../opdracht les 9 en 10/src/helpers/amountSold.js";
import {bestSellingTv as bestsellingTv, bestSellingTv, inventory} from "./constants/inventory.js";
import {amountStock} from "../../opdracht les 9 en 10/src/helpers/amountStock.js";
import {amountLeft} from "../../opdracht les 9 en 10/src/helpers/amountLeft.js";
import {typeOfTv} from "../../opdracht les 9 en 10/src/helpers/typeOfTv.js";
import {priceTv} from "../../opdracht les 9 en 10/src/helpers/priceTv.js";
import {sizeTV} from "../../opdracht les 9 en 10/src/helpers/sizeTV.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import outOfStock from "./assets/out-of-stock.png";

function App() {
    function handleClick(sortOption) {
        console.log(sortOption);
    }

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className="counter">
                <div className="sold">
                    <p>Aantal verkochte producten</p>
                    <h2>{amountSold(inventory)}</h2>
                </div>
                <div className="stock">
                    <p>Aantal ingekochte producten</p>
                    <h2>{amountStock(inventory)}</h2>
                </div>
                <div className="left">
                    <p>Aantal te verkopen producten</p>
                    <h2>{amountLeft(amountSold(inventory), amountStock(inventory))}</h2>
                </div>
            </div>

            <h2>Best verkochte tv</h2>
            <article className="tv">
                <img src={bestsellingTv.sourceImg} alt="Samsung Crystal tv"
                     className="imgTV"/>
                <div className="productInformation">
                    <h3 id="type">{typeOfTv(bestSellingTv)}</h3>
                    <h2 id="price">{priceTv(bestSellingTv)}</h2>
                    <p id="size">{sizeTV(bestSellingTv)}</p>
                    <div className="options">
                        <figure className="option">
                            <img src={check} alt="Check icon" className="optionIcon"/>
                            <p>wifi</p>
                        </figure>
                        <figure className="option">
                            <img src={minus} alt="Minus icon" className="optionIcon"/>
                            <p>speech</p>
                        </figure>
                        <figure className="option">
                            <img src={check} alt="Check icon" className="optionIcon"/>
                            <p>hdr</p>
                        </figure>
                        <figure className="option">
                            <img src={check} alt="Check icon" className="optionIcon"/>
                            <p>bluetooth</p>
                        </figure>
                        <figure className="option">
                            <img src={minus} alt="Minus icon" className="optionIcon"/>
                            <p>ambilight</p>
                        </figure>
                    </div>
                </div>
            </article>

            <div className="buttonWrap">
                <button type="button" onClick={() => {
                    handleClick(inventory.sort((a, b) => b.sold - a.sold));
                }}>Meest verkocht eerst
                </button>
                <button type="button" onClick={() => {
                    handleClick(inventory.sort((a, b) => a.price - b.price));
                }}>Goedkoopste eerst
                </button>
                <button type="button" onClick={() => {
                    handleClick(inventory.sort((a, b) => b.refreshRate - a.refreshRate));
                }}>Meest geschikt voor sport eerst
                </button>

                {/*----Bonus: opdracht 1----*/}
                <button type="button" onClick={() => {
                    handleClick(inventory.sort((a, b) => {
                            const maxA = Math.max(...a.availableSizes);
                            const maxB = Math.max(...b.availableSizes);
                            return maxB - maxA;
                        }
                    ));
                }}>Grootste schermgroottes eerst
                </button>
                <button type="button" onClick={() => {
                    handleClick(inventory.filter((tv) => {
                        if (tv.originalStock - tv.sold === 0) {
                            return tv + outOfStock;
                        }
                    }));
                }}>Uitverkocht!
                </button>
            </div>

            <h2>Alle tvs</h2>
                    {inventory.map((tv) => {
                         return <article key={tv.type} className="tv">
                             <img src={tv.sourceImg} alt={typeOfTv(tv)} className="imgTV"/>
                             <div className="productInformation">
                                 <h3 id="type">{typeOfTv(tv)}</h3>
                                 <h2 id="price">{priceTv(tv)}</h2>
                                 <p id="size">{sizeTV(tv)}</p>
                                 <div className="options">
                                     {
                                         tv.options.map((option) => {
                                             if (option.applicable === true) {
                                                 return (
                                                     <figure className="option" key={tv.type + option.name}>
                                                         <p>{option.name}</p>
                                                         <img src={check} alt="Check icon" className="optionIcon"/>
                                                     </figure>
                                                 )
                                             }
                                             if (option.applicable === false) {
                                                 return (
                                                     <figure className="option" key={tv.type + option.name}>
                                                         <p>{option.name}</p>
                                                         <img src={minus} alt="Minus icon"
                                                              className="optionIcon"/>
                                                     </figure>
                                                 )
                                             }
                                         })
                                     }
                                 </div>
                             </div>
                         </article>
                             ;
                    })}
        </>
    )
}

export default App
