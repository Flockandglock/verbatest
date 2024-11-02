import { useState } from "react";

import classes from "./Filter.module.css";

export const Filter = () => {


  
  return (
    <div className={classes.filter}>
      <button
        className={`${classes.btn}, ${classes.btn_active}`}
        type="button"
      >
        Текущие дела (1)
      </button>

      <button className={`${classes.btn}`} type="button">
        Все дела (1)
      </button>

      <button className={`${classes.btn}`} type="button">
      Выполеные дела (1)
      </button>

      <button className={`${classes.btn}`} type="button">
      Корзина (0)
      </button>
    </div>
  )
}
