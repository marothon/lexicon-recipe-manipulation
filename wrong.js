// 1. The logo text of the site has the wrong color. Change it to the correct one.
const logoTag = document.querySelector('.logo-text');
logoTag.style.color = 'black';

// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. `Hint`, check the flex properties for the correct alignment. Here is a link that might help:
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const headerTag = document.querySelector('header');
headerTag.style.justifyContent = 'initial';

// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
headerTag.style.borderBottomColor ='lightgray';

// 4. The recipe name is wrong, change it to the correct one.
const recipeTitleTag = document.getElementById('recipe-name');
recipeTitleTag.textContent = 'Frozen Cheesecake';

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const clockIconTag = document.querySelector('.time-container span:first-of-type');
clockIconTag.classList.add('material-icons');

// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const durationTag = document.querySelector('.time-container span.time');
durationTag.textContent = '60+ min';

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const imgTag = document.querySelector('.image-container img');
imgTag.setAttribute('src', 'assets/frozen-cheesecake-slice.jpg');

// 8. The background color of the ingredients list container is wrong. Fix it.
const ingredientsTag = document.querySelector('.ingredients-container');
ingredientsTag.style.backgroundColor = 'rgb(249, 249, 249)';

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste.
// In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
const ingredientsCakeBottomTag = document.querySelector('.ingredients-list-bottom');
ingredientsCakeBottomTag.innerHTML = '<li>15st digestivetex</li><li>Lite smör</li>';

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const ingredientsPasteTag = document.querySelector('.ingredients-list-paste');
ingredientsPasteTag.children[2].innerHTML = '3tsk vaniljsocker';

// 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
ingredientsPasteTag.insertAdjacentHTML('beforeend', '<li>400g naturell philadelphiaost</li>');

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
const instructionsTitleTag = document.querySelector('.instructions-container h3');
instructionsTitleTag.classList.remove('shadow');

// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const instructionsListTag = document.querySelector('.instructions-list');
instructionsListTag.children[1].innerHTML = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsListTag.children[8].innerHTML = 'Ställ in i frysen över natten.';
