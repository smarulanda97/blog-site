import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Copyrigth = () => {
  return (
    <div className="copyright">
      Copyright &copy;All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by &nbsp;

      <Link href={'//colorlib.com'} prefetch={false}>
        <a target={"_blank"}>
          { 'Colorlib' }
        </a>
      </Link>
    </div>
  )
};

export default Copyrigth;