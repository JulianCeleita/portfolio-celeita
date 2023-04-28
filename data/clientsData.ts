import { v4 as uuidv4 } from 'uuid';

// Import images
import NextImage from '../public/images/brands/next.webp';
import React from '../public/images/brands/react.png';
import Redux from '../public/images/brands/redux.png';
import Tailwind from '../public/images/brands/tailwind.png';
import GraphQl from '../public/images/brands/graphql.png';
import Firebase from '../public/images/brands/firebase.png';
import Bootstrap from '../public/images/brands/bootstrap.jpg';
import Vite from '../public/images/brands/vite.png';

export const clientsHeading = 'Tools & Technologies';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Amazon',
		img: NextImage,
	},
	{
		id: uuidv4(),
		title: 'Sony',
		img: React,
	},
	{
		id: uuidv4(),
		title: 'Adidas',
		img: Redux,
	},
	{
		id: uuidv4(),
		title: 'FILA',
		img: Tailwind,
	},
	{
		id: uuidv4(),
		title: 'NB',
		img: GraphQl,
	},
	{
		id: uuidv4(),
		title: 'SAMSUNG',
		img: Firebase,
	},
	{
		id: uuidv4(),
		title: 'CANON',
		img: Vite,
	},
	{
		id: uuidv4(),
		title: 'PUMA',
		img: Bootstrap,
	},
];
