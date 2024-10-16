import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import NameCard from './components/NameCard';
import ContentSection from './components/ContentSection';

library.add(fab, fas)

function App() {

  // comment
  return (
    <div className="App">
      <div className="flex">
        <div className="w-2/6 h-screen flex">
          <NameCard />
        </div>
        <ContentSection/>
      </div>
    </div>
  );
}

export default App;
