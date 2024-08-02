// 1. What is the name of the recipe?
const recipeTag = document.getElementById('recipe-name');
console.log(`Recipe name: ${recipeTag.textContent}`);

// 2. What HTML tag is used to display the Recipe name?
console.log(recipeTag.tagName);

// 3. What is the font size of the paragraph tag with the class "description".
const pTag = document.querySelector('p.description');
console.log(`Font size: ${getComputedStyle(pTag).fontSize}`);

// 4. What is the value of the alt attribute on the image?
const imgTag = document.querySelector('.image-container img');
console.log(`Alt Attribute: "${imgTag.getAttribute('alt')}"`);

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
// {
//   url: string
//   height: number,
//   width: number,
// }
const imgMeta = {
    url: imgTag.getAttribute('src'),
    height: imgTag.clientHeight,
    width: imgTag.clientWidth
};
console.log(imgMeta);

// 6. How many ingredients does the paste-recipe have?
const pasteIngredentListTag = document.querySelector('.ingredients-list-paste');
console.log(`Number of paste ingredients: ${pasteIngredentListTag.childElementCount}`);

// 7. Which is the fourth element in the list containing the ingredients for the paste?
console.log(`Fourth ingredient in paste: "${pasteIngredentListTag.children[3].textContent}"`);

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
//     order: number;
//     text: instruction;
// }
let instructions = [];
let order = 1;
const instructionListTag = document
    .querySelectorAll('.instructions-list li')
    .forEach( (instruction) => {
        instructions.push(
            {
                order: order,
                text: instruction.innerText
            }
        )
        order++;
    });
console.log(instructions);

