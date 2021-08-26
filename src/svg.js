import React, { Component } from 'react';

class svg extends Component {
    render() {
        return (
            <>
            </>
        );
    }
}

export default svg;

export class Back extends Component {
    render() {
        return (
            <svg width="49" height="20" viewBox="0 0 49 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M47.6482 9.3008C48.0825 9.35564 48.3617 9.6024 48.4858 10.0411C48.4238 10.425 48.1446 10.6443 47.6482 10.6991H3.53495L11.7248 17.9376C11.9729 18.2666 11.9729 18.5956 11.7248 18.9247C11.6007 18.9795 11.4145 19.0343 11.1664 19.0892C10.9802 19.0892 10.7941 19.0343 10.608 18.9247L1.11523 10.5346C1.05319 10.4798 0.991146 10.3975 0.929102 10.2879C0.867057 10.1234 0.867057 9.93143 0.929102 9.71208C0.929102 9.65724 0.991145 9.57499 1.11523 9.46531L10.608 1.07528C10.9802 0.85593 11.3525 0.85593 11.7248 1.07528C11.9729 1.4043 11.9729 1.73332 11.7248 2.06234L3.53495 9.3008H47.6482Z"
                    fill="white" />
            </svg>
        );
    }
}

export class Priority extends Component {
    render() {
        return (<svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={4} cy={4} r={3} stroke={this.props.id_priority} strokeWidth={2} />
        </svg>)
    }
}


export class PreToDo extends Component {
    render() {
        return (
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="3.00098" cy="3.0493" rx="3" ry="2.85789" fill="url(#paint0_linear)" fill-opacity="0.7" />
                <defs>
                    <linearGradient id="paint0_linear" x1="0.222331" y1="-1.13745e-08" x2="5.74705" y2="5.58053" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F3477A" />
                        <stop offset="1" stop-color="#884CB2" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }
}

// Priority
export class Minor extends Component {
    render() {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9.5" stroke="#219653" stroke-width="5" />
            </svg>
        )
    }
}
export class Normal extends Component {
    render() {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9.5" stroke="#F2994A" stroke-width="5" />
            </svg>
        )
    }
}
export class Critical extends Component {
    render() {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9.5" stroke="#EB5757" stroke-width="5" />
            </svg>
        )
    }
}
