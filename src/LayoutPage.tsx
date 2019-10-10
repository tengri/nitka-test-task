import * as React from 'react';
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { connect } from "react-redux";
import { AppState } from "./interfaces";
import OneColumnIcon from './Icons/one-column.png';
import TwoColumnsIcon from './Icons/two-columns.png';
import ThreeColumnsIcon from './Icons/three-columns.png'
import { useState } from "react";
import { Dispatch } from "redux";

interface Props extends RouteComponentProps {
    dispatch: Dispatch;
    text: string;
}

export const LayoutPageComponent = (props: Props) => {
    
    const [view, setView] = useState('1');

    if (!props.text) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={'layout-page'}>
            <div className={'container layout-container'}>
                <div
                    className={'columns column-count-' + view}
                    contentEditable
                >
                    {props.text}
                </div>
                <div className={'view-icons'}>
                    <img
                        className={'view-icon'}
                        src={OneColumnIcon}
                        alt={'One column view'}
                        onClick={() => setView('1')}
                    />
                    <img
                        className={'view-icon'}
                        src={TwoColumnsIcon}
                        alt={'Two columns view'}
                        onClick={() => setView('2')}
                    />
                    <img
                        className={'view-icon'}
                        src={ThreeColumnsIcon}
                        alt={'Three columns view'}
                        onClick={() => setView('3')}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        text: state.text
    }
}

export const LayoutPage = withRouter(connect(mapStateToProps)(LayoutPageComponent));