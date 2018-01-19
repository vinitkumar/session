import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class GistList extends Component {
    render() {
        const gists = this.props.gists;
        console.log('from GistList', gists);
        let gistContainer = null;
        if (gists !== null) {
            gistContainer = [];
            gists.forEach(function (gist, key) {
                console.log(gist.id);
                gistContainer.push(<li><Link to={`/gists/${gist.id}`} key={key}>{gist.id}</Link></li>);
            });
            console.log(gistContainer);
        }
        
        return(
            <div>
                <ul className="gistList">
                    {gistContainer}
                </ul>
            </div>
        );
    }
}

export default GistList;