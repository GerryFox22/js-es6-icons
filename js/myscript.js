

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
let select = document.getElementById("select");

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. OK!


// Milestone 2
// Coloriamo le icone per tipo OK!


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// Inizializziamo un array di colori
let iconsColor = [
    "blue",
    "orange",
    "turquoise",
    "yellow",
    "black",
];

let colorIcons = colorIcon (icons, iconsColor);
printIcons(colorIcons, container)


addOptions(getArrayProperties(icons, "type"), select)


select.addEventListener("change", () => {
    let selectedValue = select.value;
    
    let filteredIcons = filterItems (icons, selectedValue);
    printIcons(filteredIcons, container)
});



// Funzione che genera una copia dell'array con l'aggiunta del colore scelto in base alla proprietà inserita
function colorIcon (array, color){
    let types = getArrayProperties(icons, "type");
    console.log(types)
    
    let newColorArray = array.map ((element) => {

        let indexOfType = types.indexOf(element.type);

        if ( indexOfType !== -1){
            element.color = iconsColor[indexOfType]
        }
        return element;
    });

    return newColorArray;

};

// Creo una funzione che estrapola da un array la proprietà richiesta
function getArrayProperties (array, property) {
    let types = [];

    array.forEach((element) => {
        if (! types.includes(element[property])){
            types.push(element[property]);
        }
    });
    return types;
}


// Funzione che dato un array in input ne estrae il contenuto e lo stampa in HTML (Container)
function printIcons (array , container) {

    let selectedIcon = "";

    array.forEach((element) => {

        let {name, prefix, type, family, color} = element

        selectedIcon += `
        <div class"icon-container">
            <i class=" ${family} ${prefix}${name}" style="color:${color}"></i>
            <h4 class"icon-name"> ${name} (${type}) </h4>
        </div>
        
        `
    });

    container.innerHTML = selectedIcon;
};


// Funzione che aggiunge le opzioni da un array e le inserisce all'interno di una select
function addOptions (array, select){

    array.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    });
};



// Funzione che filtra gli elementi di un array in base al filtro dato in input 
function filterItems (array, filter) {
    if(filter.trim().toLowerCase() === "all"){
        return array;
    };

    let filteredArray = array.filter ((element) => {
        return element.type == filter;
    });
    return filteredArray;
};