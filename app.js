const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function(){
      if (menu.classList.contains('active')) {
       menu.classList.remove('active');
       menuIcon.textContent = '☰';
      } else {
        menu.classList.add('active');
        menuIcon.textContent = '✖';
      }
    });

    /* The addEventListener method typically accepts two parameters:

Event Type: A case-sensitive string that specifies the type of event (e.g., click, keypress).
Listener: A function that defines the action to be executed when the specified event occurs.*/