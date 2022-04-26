import '../../sass/main.scss';

class Tabs {
  constructor({
    rootSelector,
    activeControlClass = 'active',
    activePaneClass = 'active',
    defaultActiveTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._activePaneClass = activePaneClass;
    this._defaultActiveTab = defaultActiveTab - 1;

    this._bindEvents();
    this._setActiveTab();
  }

  _getRefs(root) {
    const refs = {};

    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);

    return refs;
  }
  _bindEvents() {
    this._refs.controls.addEventListener('click', this._onControlClick.bind(this));
  }
  _onControlClick() {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
      console.log('miss click');
      return;
    }

    this._removeActiveTab();

    const controlItem = event.target;
    controlItem.classList.add(this._activeControlClass);

    const paneId = this._getPaneId(controlItem);
    this._setActivePane(paneId);
  }

  _setActiveTab() {
    const controlItems = this._refs.controls.querySelectorAll('a');
    const control = controlItems[this._defaultActiveTab];

    control.classList.add(this._activeControlClass);

    const paneId = this._getPaneId(control);
    this._setActivePane(paneId);
  }

  _removeActiveTab() {
    const currentActiveControlItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );

    if (!currentActiveControlItem) {
      return;
    }

    currentActiveControlItem.classList.remove(this._activeControlClass);
    const paneId = this._getPaneId(currentActiveControlItem);
    this._removeActivePane(paneId);
  }

  _setActivePane(paneId) {
    const pane = this._getPaneById(paneId);
    pane.classList.add(this._activePaneClass);
  }

  _removeActivePane(paneId) {
    const pane = this._getPaneById(paneId);
    pane.classList.remove(this._activePaneClass);
  }

  _getPaneId(control) {
    return control.getAttribute('href').slice(1);
  }
  _getPaneById(paneId) {
    return this._refs.panes.querySelector(`#${paneId}`);
  }
}

new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'controls__item--active',
  activePaneClass: 'pane--active',
  defaultActiveTab: 1,
});

// const refs = {
//   controls: document.querySelector('#tabs-1 [data-controls]'),
//   panes: document.querySelector('#tabs-1 [data-panes]'),
// };

// refs.controls.addEventListener('click', onControlClick);

// function onControlClick() {
//   event.preventDefault();

//   if (event.target.nodeName !== 'A') {
//     console.log('miss click');
//     return;
//   }

//   const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');

//   if (currentActiveControlItem) {
//     currentActiveControlItem.classList.remove('controls__item--active');

//     const paneId = getPaneId(currentActiveControlItem);
//     const pane = getPaneById(paneId);
//     pane.classList.remove('pane--active');
//   }

//   const controlItem = event.target;
//   controlItem.classList.add('controls__item--active');

//   const paneId = getPaneId(controlItem);
//   const pane = getPaneById(paneId);
//   pane.classList.add('pane--active');
// }

// function getPaneId(control) {
//   return control.getAttribute('href').slice(1);
// }
// function getPaneById(paneId) {
//   return refs.panes.querySelector(`#${paneId}`);
// }
