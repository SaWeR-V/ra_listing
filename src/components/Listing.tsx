import React from "react";
import { CurrencyCheck } from "./CurrencyCheck";
import { CheckTextLength } from "./CheckTextLength";
import { LevelCheck } from "./LevelCheck";

interface MainImage {
    url_570xN: string;
}

type Properties = {
    state: string;
    listing_id: number;
    url?: string;
    MainImage?: MainImage;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
}

type StartProps = {
    items: Properties[]
}

export function Listing({items}: StartProps) {

    return (
        <div className="item-list">
            {items.map(item => 
                {if (item.state !== 'removed') {
                    return (
                        <div key={item.listing_id} className="item">
                            <div className="item-image">
                                <a href={item.url}>
                                {item.MainImage && <img src={item.MainImage.url_570xN}/>}
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