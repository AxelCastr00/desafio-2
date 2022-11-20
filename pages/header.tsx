import { 
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from'react-share';
import styles from '../styles/Home.module.css'

function Networks() {
  const fcUrl = 'https://www.facebook.com/';
  const twUrl = 'https://twitter.com/';
  const wpsUrl = 'https://web.whatsapp.com/';

  return (
    <header className={styles.header}>
    <FacebookShareButton url={fcUrl}>
    </FacebookShareButton>
    <FacebookIcon/>
    <TwitterShareButton url={twUrl}>
    </TwitterShareButton>
    <TwitterIcon/>
    <WhatsappShareButton url={wpsUrl}>
    </WhatsappShareButton>
    <WhatsappIcon/>
    </header>
  );
}

export default Networks;