/*
DOM

Las siglas DOM significan Document Object Model, 
o lo que es lo mismo, la estructura del documento HTML. 
Una página HTML está formada por múltiples etiquetas HTML,
 anidadas una dentro de otra, formando un árbol de etiquetas
}relacionadas entre sí, que se denomina árbol DOM 
(o simplemente DOM).


Nodo: en el dom es cualquier etiqueta de HTML
un parrafo, el mismo body, o las etiquetas
TIPOS DE NODOS
a) Document: el nodo document es el nodo raíz, a partir del cual derivan 
el resto de nodos.

b) Element: son los nodos definidos por etiquetas html. 
Por ejemplo una etiqueta div genera un nodo. Si dentro de ese div tenemos tres 
etiquetas p, dichas etiquetas definen nodos hijos de la etiqueta div.

c) Text: el texto dentro de un nodo element se considera un nuevo nodo hijo 
de tipo text (texto). Los navegadores también crean nodos tipo texto sin 
contenido para representar elementos como saltos de línea o espacios vacíos.
POR EJEMPLO <h1>titulo</h1> titulo es el nodo text

d) Attribute: los atributos de las etiquetas definen nodos, aunque trabajando 
con JavaScript no los veremos como nodos, sino que lo consideramos información 
asociada al nodo de tipo element.

e) Comentarios y otros: los comentarios y otros elementos como las declaraciones 
doctype en cabecera de los documentos HTML generan nodos.



METODOS DE SELECCION DE ELEMENTOS
docuement

docuement.getElementById(id)
Busca el elemento HTML con el ID. Si no, devuelve null.

getElementsByTagName(tag)
Busca elementos tag. Si no encuentra ninguno, devuelve [].

docuement.getElementsByName(name)
Busca elementos con atributo name name. Si no, devuelve [].

 docuement.querySelector(sel)
Busca el primer elemento que coincide con el selector CSS sel. 
Si no, NULL
puede ser una classe que creamos en CSS, como .parrafo or ID #parrafo

 docuement.querySelectorAll(sel)
Busca todos los elementos que coinciden con el selector CSS sel. Si no, [].

let parrafo = document.getElementById("parrafo");
document.write(parrafo)

let parrafo = document.getElementsByName("p");
document.write(parrafo)

Metodos para definir obtener y eliminar valores de atributos javascript

setAttribute() Modifica un atributo 
con CLASS rangoEtario.setAttribute("type""number") primero cual es el atributo y luego a que se va a cambiar 

getAttribute()Obtener el tipo de atributo que es

removeAttribute(). remueve el valor del atributo


contenteditable 
Indica si el elemento  debería ser editable o no para el usuario.
con true or false

dir
direccion del elemento

hidden
oculta el elemento con FALSE

tabindex
tabular con TAB y mover de un lado a otro

title
modifica el textoal poner el mouse tira un titulo
lo podemos modificar


ATRIBUTOS INPUT 
classname: nos dice el nombre de la clase

value: el valor del input

type: modificar tyoe colo color range 

accept: su oucpa para el input type file, que solo acepte PNG por eje

form: ejecutar un unput dentro de un form

minlenght: minima cantidad de caractetes que debe tener un input

placeholder: lo que sale clarito en los inputs 

required: nos permite si es requerido o no, necesario completarlo


atributo STYLE

en JS se utiliza camelCase con las propiedades



 CLASSLIST

 add: agrega una clase

 remove: borra la clase


 item: por ejemplo tenemos 4 clases
 si ponemos 
 titulo.classList(2) accedemos a la clase 2, solo para pedir info

 contains: para saber si existe una clase
  titulo.classList.contains("grande") 
nos devuelve TRUE or FALSE, si existe o no

toggle: nos sirve para si esta la clase, la elimina y si no la tiene
la agg
titulo.classList.toggle("grande") 

raplace: nos reemplaza una clase por otra 
titulo.classList.replace("grande" "chico") 
nos devuelve TRUE or FALSE, si existe o no


OBTENCION Y MODIFICACION DE ELEMENTOS
textContent: devuelve el texto de cualquier nodo, todo el texto
aun que este oculto 

innerText: devuelve el contenido HTML de un elemento

innerHTML:ddevuelve el contenido HTML COMPLETO de un elemento

outerHTML:devuelve el texto visible de un node element, inclyendo las etiquetas 
PROBAR CON ALERT 
let resultado = titulo.textContent;
let resultado2 = titulo.innerHTML;
let resultado3 =titulo.outerHTML;

alert(resultado)
alert(resultado1)
alert(resultado2)


CREACION DE ELEMENTOS
createElements()

createTextNode()

appendChild()

createDocumentFragment()


OBTEBCION Y MODFICACION DE CHILD

firstChild: primer hijo
lastChild: ultimo hijo
fisrtElementChild: primer elemento hijo
lastElementoChild: ultimo elemto del  hijo
childNodes: todos los nodos hijos
children: solo los elementos


METODOS DE CHILDS
replaceChild: reemplaza 
removeChild: elimina
hasChildNode: verificar si tiene elmento hijo o no


PROPIEDADES DE LOS PADRS
parentElement: el padre elemnto de un elemento
parentNode: en casi lo mismo que parentElement


PROPEDADES SIBLINGS
los que estan en la misma linea, los que estan en el mmismo nodo

nextSibling: el que esta a la par

previousSibling:

nextElementSibling: 

previousElementSibling:


NODOS EXTRAS:
closest:
*/

