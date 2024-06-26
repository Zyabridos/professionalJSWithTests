export default () => {
  // BEGIN

  // функция-обработчик в качестве параметров
  // получает event и элемент
  const handle = (e, container) => {
    const targetTab = e.target;
    // если элемент, на котором произошел клик
    // уже активный, то делаем возврат
    if (targetTab.classList.contains('active')) {
      return;
    }

    // получем id элемента на котором был клик,
    // и далее по нему получаем сам элемент
    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    // находим и получаем элемент, который был активным до клика
    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    // добавляем класс active чтобы сделать элемент,
    // на котором произошел клик активным
    targetTab.classList.add('active');
    targetTabContent.classList.add('active');
    // удаляем класс с элемента который был активным до клика
    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  // находим все элементы с классом .nav
  const navs = document.querySelectorAll('.nav');

  // на каждый nav вешаем событие
  // для этого обходим все элементы и на каждый вешаем обработчик по событию click
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event, nav));
    });
  });
  // END
};