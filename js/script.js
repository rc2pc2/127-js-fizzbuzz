const gridElement = document.querySelector('section.grid');
// console.log(gridElement);

for (let index = 1; index <= 100; index++) {
    let content = index;
    const newArticle = document.createElement('article'); 

    if ( index % 15 === 0){
        content = 'FizzBuzz';
        newArticle.classList.add('bg-yellow');
    } else if ( index % 5 === 0) {
        content = 'Buzz';
        newArticle.classList.add('bg-green');
    } else if (index % 3 === 0){
        content = 'Fizz';
        newArticle.classList.add('bg-aqua');
    } 

    newArticle.append(content);
    gridElement.appendChild(newArticle);
    console.log(content);
}