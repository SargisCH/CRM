import React, {Component} from 'react';
import {connect} from 'react-redux';
import Contacts from './Contacts';
import Header from '../components/Header';
import Menu from '../components/Menu';

 class Main extends Component{
    render() {
        return(
            <div className="global_container">
                <div  className="return ">
                    <Header/>
                    <Menu menuIsOpen={this.props.menuIsOpen}/>
                    <Contacts/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        menuIsOpen: state.UI.menuIsOpen
    }
}

export default connect(mapStateToProps)(Main)


