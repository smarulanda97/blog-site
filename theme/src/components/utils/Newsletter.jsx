import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Button } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Newsletter = () => {
  return (
    <div className="subscribe">
      <div className="subscribe_background"></div>
      <div className="subscribe_content">
        <div className="subscribe_title">Subscribe</div>
        <Form>
          <Form.Control type="email" className="sub_input" placeholder="Your Email" required="required"/>
          <Button className="sub_button">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </Form>
      </div>
    </div>  
  )
};

export default Newsletter;