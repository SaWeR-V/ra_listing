import { CurrencyCheck } from "./CurrencyCheck";
import { CheckTextLength } from "./CheckTextLength";
import { LevelCheck } from "./LevelCheck";

export function Listing({items}) {

    return (
        <div className="item-list">
            {items.map(item => 
                {if (item.state !== 'removed') {
                    return (
                        <div key={item.listing_id} className="item">
                            <div className="item-image">
                                <a href={item.url}>
                                    <img src={item.MainImage.url_570xN}/>
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{CheckTextLength(item.title)}</p>
                                <p className="item-price">{CurrencyCheck(item.currency_code)}{item.price}</p>
                                {LevelCheck(item.quantity)}
                            </div>
                        </div>
                    )
                }}
            )}
        </div>
    )
}