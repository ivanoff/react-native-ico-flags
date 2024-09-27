import SvgMain from 'react-svg-main';
const iconsSet = require('./data');
const synonyms = require('./synonyms');

export default class Icon extends SvgMain {
  constructor(props) {
    super(props);
    this.iconsSet = iconsSet;
    this.synonyms = synonyms;
  }
}

