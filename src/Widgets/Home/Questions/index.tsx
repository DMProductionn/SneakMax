import './style.css';
import Accordion from 'react-bootstrap/Accordion';

const Questions = () => {
  return (
    <section className="section-qustions">
      <p className="title-qustions">Часто задаваемые вопросы</p>
      <div className='accordion__wrapper'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Вопрос 1
              <svg
                className="icon-qustions"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z"
                  fill="black"
                />
              </svg>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Вопрос 2
              <svg
                className="icon-qustions"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z"
                  fill="black"
                />
              </svg>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
