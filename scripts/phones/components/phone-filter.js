import Component from '../../common/component.js';

export default class PhoneFilter extends Component {
  constructor({element}) {
    super({element});
    this._element = element;

    this._render();

    this.on('input', '[data-input="sort-by-name"]', (event) => {
        var input = document.querySelector('[data-input="sort-by-name"]')
        this._trigger('filterByName', input.value);
     });
  }

  _render() {
    this._element.innerHTML = `
<p>
    Search:
    <input data-input="sort-by-name">
</p>

<p>
    Sort by:
    <select>
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
    </select> 
</p>
    `
  }
}
