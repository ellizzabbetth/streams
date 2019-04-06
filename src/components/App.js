import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// duplicate line: Ctrl + Shift + D (Windows/Linux)

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
console.log(process.env.REACT_APP_CLIENT_ID);
//
// const PageOne = () => {
//   return (
//     <div>PageOne
//   <Link to="/pagetwo">Nav to Page 2</Link>
//    </div>
//   );
//
// };
//
// const PageTwo = () => {
//   return (
//     <div>PageTwo
//     <button>Click Me!</button>
//     <Link to="/">Nav to Page 2</Link>
//   </div>
// );
// };

const App = () => {
  return (
    <div>

      <BrowserRouter >
        <div>
          <Header />
          <Route path ="/" exact component={StreamList} />
          <Route path ="/streams/new" exact component={StreamCreate} />
          <Route path ="/streams/edit" exact component={StreamEdit} />
          <Route path ="/streams/delete" exact component={StreamDelete} />
          <Route path ="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );

};
export default App;
