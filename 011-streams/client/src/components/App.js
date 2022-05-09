import React from 'react'
// Deployment with BrowserRouter can be challenging using some services
// Browser Router struggles with unknown path as there is no backend html server (wont' do 404 - will give back html)
// Hash Router use as server won't look at anything after '#' so only client looks at this
import { BrowserRouter, HashRouter, MemoryRouter, Route, Link } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div> 
                    <Header />
                    <div className='ui container'>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit' exact component={StreamEdit} />
                        <Route path='/streams/delete' exact component={StreamDelete} />
                        <Route path='/streams/show' exact component={StreamShow} />
                    </div>
                </div>
            </BrowserRouter>
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