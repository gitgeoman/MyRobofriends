import React from 'react';
import Card from './Card';


//komponent importuje reacta potem importuje inny komponent ktory przetwarza
//przetwarzanie polega na operacji wyswietalnia danych przez funkcję przypisaną do zmiennej CardList
//funckji najpierw robi destrukturyzację danych ktre dostaje od komponentu rodzica.
//potem odlicza po wszystkich obiektach tabeli i 

const CardList = ({robots})=>{ //{robots} taki zapis to destrukturyzacja oznacza że do obiektu będzie można się odwołać wołając robots a że jest to tablica to potem będzie można go odliczyć
	return(
		<div>
			{
				robots.map((user,i)=>{
					return (
						<Card 
							key={i} 
							id={robots[i].id}  
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}
export default CardList;