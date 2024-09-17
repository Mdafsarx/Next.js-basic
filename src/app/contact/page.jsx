import style from "./styles.module.css"

import { Protest_Guerrilla } from "next/font/google"

const protest= Protest_Guerrilla({weight:['400'],subsets:['latin']})

export default function Contact() {
    // console.log(a)
    return (
        <div>
          <p className={`${style.text_color} font-bold ${style.text_bg} ${protest.className}`}>Contact page</p>
        </div>
    )
}
