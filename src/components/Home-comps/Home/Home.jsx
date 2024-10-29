import SideImage from '../SideImage/SideImage'
import Heading from '../Header/Heading'
import List from '../List/List';
import Form from '../Form/Form'
import { useMediaQuery } from 'react-responsive';


// eslint-disable-next-line react/prop-types
const Home = ({ emailInput, setEmailInput }) => {
 
    const isDesktop = useMediaQuery({ query: '(min-width: 82.5em)'});

    
  
  
    return (
      <>
      
        <div className="wrapper">
          <div className="wrapper__card">
            <header className='wrapper__card__header'>
              <Heading />
            </header>
            <main>
              <section className='wrapper__card__list'>
                <List />
              </section>
              <section className='wrapper__card__form'>
                <Form emailInput={emailInput} setEmailInput={setEmailInput} />
              </section>
            </main>
          </div>
          <aside className='wrapper__card__img'>
            <SideImage isDesktop={isDesktop} />
          </aside>
         
        </div>
  
      </>
    );
}

export default Home
