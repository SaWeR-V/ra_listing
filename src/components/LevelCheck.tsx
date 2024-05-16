import React from "react"
export function LevelCheck(value?: number) {
    if (value && value <= 10) {
        return (
            <p className="item-quantity level-low">{value} left</p>
        )
    }
    else if (value && value <= 20) {
        return (
            <p className="item-quantity level-medium">{value} left</p>
        )
    }
    else if (value && value > 20) {
        return (
            <p className="item-quantity level-high">{value} left</p>
        )
    }
}