import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  /**
 * Overrides parent class' evacuation message.
 */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}