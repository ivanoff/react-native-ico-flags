import SvgMain from 'react-svg-main';
const iconsSet = require('./data');

export default class Icon extends SvgMain {
  constructor(props) {
    super(props);
    this.iconsSet = iconsSet;
  }
}

