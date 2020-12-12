import { withTranslation } from '../i18n';

class Home extends React.component {
  static async getInitialProps() {
    return { nameSpacesRequired: ["common"] };
  }
  render() {

  }
};

export default withTranslation("common")(Home);