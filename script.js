    // JavaScript code to manipulate the DOM and log information to the console
    const web = document.getElementById('web');
    web.textContent = 'Web Technologies - Updated!';
    web.style.color = 'blue';
    console.log(web.textContent);
    web.setAttribute('class', 'web-tech');
    console.log(web.getAttribute('class'));

    const descr = document.getElementsByClassName('description');
    descr[0].innerHTML = '<h2>Web technologies are the tools and techniques used to create and manage websites and web applications.</h2>';
    console.log(descr[0].innerHTML);

    const web2 = document.querySelector('#web');
    console.log(web2.textContent);

    const descr2 = document.querySelectorAll('.description');
    console.log(descr2.forEach((item) => console.log(item.textContent)));
    console.log(descr2[1].textContent);

    const section = document.querySelector('section');
    section.classList.add('highlight');
    console.log(section.classList.contains('highlight'));

    const sections = document.querySelectorAll('section');
    sections.forEach((item) => {
        item.classList.add('highlight');
        console.log(item.classList.contains('highlight'));
    });

    const message = document.getElementById('message');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        message.textContent = 'You clicked the button!';
        message.style.color = 'red';
    });

    const list = document.getElementById('list');
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        list.appendChild(newItem);
    });