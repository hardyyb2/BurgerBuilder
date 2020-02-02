import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' }
]

const buildcontrols = props => {
  return (
    <div className={classes.BuildControls}>
      <div>
        Current Price : <strong>{props.currentPrice.toFixed(2)}</strong>
      </div>

      {controls.map(ctrl => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        )
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchasing}
      >
        Order Now
      </button>
    </div>
  )
}

export default buildcontrols
