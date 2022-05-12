import React from 'react'
// Deployment with BrowserRouter can be challenging using some services
// Browser Router struggles with unknown path as there is no backend html server (wont' do 404 - will give back html)
// Hash Router use as server won't look at anything after '#' so only client looks at this
// We use Router if we want to have our own history object
// With React-Router each component needs to be designed to work in isolation (fetch own data!)
import { Router, BrowserRouter, HashRouter, MemoryRouter, Route, Link } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div> 
                    <Header />
                    <div className='ui container'>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/show' exact component={StreamShow} />
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App



// const PageOne = () => {
//     return <div>
//         Page One
//         <Link to='/pagetwo'>Navigate to page two</Link>
//     </div>
// }

// const PageTwo = () => {
//     return (
//         <div>
//             Page Two
//             <button>Click Me!</button>
//             <Link to='/'>Navigate to page one</Link>
//         </div>
//     )
// }
// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <div> 
//                     <Route path='/' exact component={PageOne} />
//                     <Route path='/pagetwo' component={PageTwo} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     )
// }