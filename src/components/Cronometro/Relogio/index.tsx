import React from 'react';
import style from './Relogio.module.scss';

export default function Relogio(){
	return(
			<>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioNumero}>:</span>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioNumero}>0</span>
			</>	
	)
}
