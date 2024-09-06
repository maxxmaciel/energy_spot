import packageJson from '../../../package.json';
import FooterStyled from './FooterStyled';

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterStyled >
      <footer>VTT @2024  - VTT@ - {packageJson.version} | React - {packageJson.dependencies.react}</footer>
    </FooterStyled >
  )
}

export default Footer;