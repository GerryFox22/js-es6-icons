

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


let container = document.getElementById("container");


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. OK!


// Milestone 2
// Coloriamo le icone per tipo


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

printIcons(icons, container)

// Inizializziamo un array di colori
let iconsColor = [
    "blue",
    "orange",
    "turquoise",
    "yellow",
    "black",
];

// console.log(getArrayProperties(icons,"type"))



// Creo una funzione che estrapola da un array la proprietà richiesta
function getArrayProperties (array, property) {
    let types = [];

    array.forEach((element, index) => {
        if (! types.includes(element[property])){
            types.push(element[property]);
        }
    });
    return types;
}


// Funzione che dato un array in input ne estrae il contenuto e lo stampa in HTML (Container)
function printIcons (array , container) {

    let selectedIcon = "";

    icons.forEach((element) => {

        let {name, prefix, type, family} = element

        selectedIcon += `
        <div class"icon-container">
            <i class=" ${family} ${prefix}${name}"></i>
            <h4 class"icon-name"> ${name} (${type}) </h4>
        </div>
        
        `
    });

    container.innerHTML = selectedIcon;
};