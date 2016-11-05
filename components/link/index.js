import { themr } from 'react-css-themr';
import { LINK } from '../identifiers';
import { Link } from './Link';
import theme from './theme.scss';

const ThemedLink = themr(LINK, theme)(Link);

export default ThemedLink;
export { ThemedLink as Link };
