import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from './interfaces';
import { saveText } from './actions';
import { Dispatch } from 'redux';


interface IProps extends RouteComponentProps {
    dispatch: Dispatch;
}

const MainPageComponent = (props: IProps) => {
    const [text, setText] = useState('');

    const handleLayoutClick = () => {
        props.history.push({pathname: '/layout'});
        props.dispatch(saveText(text));
    };

    return (
        <div className={'main-page'}>
            <div className={'container'}>
                <div className={'form'}>
                    <textarea className={'textarea'} onChange={e => setText(e.target.value)} value={text}/>
                    <button className={'layout-btn'} onClick={handleLayoutClick}>
                        LAYOUT
                    </button>
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        text: state.text
    }
};

export const MainPage = withRouter(connect(mapStateToProps)(MainPageComponent));