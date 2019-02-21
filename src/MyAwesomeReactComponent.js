import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50%',
    }
}

const MyAwesomeReactComponent = () => (
    <div style={styles.root}>
        {/* <RaisedButton label="Default" style={style} /> */}
        <RaisedButton label="Secondary" secondary={true} />
    </div>

);

export default MyAwesomeReactComponent;