import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton, Dialog } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

class SignContainer extends React.Component{

    render(){
        const { handleClose, open } = this.props;

        const actions = [
            <FlatButton
                label="Annuler"
                secondary={true}
                onClick={handleClose}
            />,
            <FlatButton
                label="Connexion"
                primary={true}
                keyboardFocused={true}
                onClick={handleClose}
            />,
        ];

        return (
            <div className="SignContainer">
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={true}
                    onRequestClose={handleClose}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>  
        )
    }
}

export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            SignContainer: {
                open: false
            }
        }
    }

    handleSignContainerClose = () => {
        this.setState({ SignContainer: { open: false} });
    };

    handleSignContainerOpen = () => {
        this.setState({ SignContainer: { open: true } });    
    }

    render(){

        const { SignContainer: { open } } = this.state;

        return (
            <div className="root">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={
                        <FlatButton label="Connexion" onClick={this.handleSignContainerOpen} />
                    }
                />

                <SignContainer open={true} handleClose={this.handleSignContainerClose} />
            </div>
        )
    }
}