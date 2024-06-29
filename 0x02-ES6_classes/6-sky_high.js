import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    const { floors } = this;
    return `Evacuate slowly the ${floors} floors`;
  }
}
