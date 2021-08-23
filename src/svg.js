import React, { Component } from 'react';

class svg extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default svg;

export class Priority extends Component {
    render() {
        return (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" stroke="#219653" stroke-width="2" />
            </svg>
        );
    }
}


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

export class InProgress extends Component {
    render() {
        return (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#56CCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        );
    }
}

export class Completed extends Component {
    render() {
        return (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9166 10.5416V11.5C21.9153 13.7462 21.1879 15.932 19.8429 17.731C18.498 19.5302 16.6075 20.8463 14.4535 21.4832C12.2993 22.1201 9.9971 22.0436 7.88999 21.2652C5.78292 20.4867 3.98393 19.048 2.76133 17.1636C1.53874 15.2791 0.958031 13.0501 1.10583 10.8086C1.25362 8.56721 2.12201 6.43363 3.58146 4.72608C5.04091 3.01853 7.01324 1.82848 9.20428 1.33344C11.3953 0.838412 13.6877 1.06489 15.7395 1.97913" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    }
}

export class Canceled extends Component {
    render() {
        return (
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4999 21.9166C17.2528 21.9166 21.9166 17.2529 21.9166 11.5C21.9166 5.74701 17.2528 1.08331 11.4999 1.08331C5.74695 1.08331 1.08325 5.74701 1.08325 11.5C1.08325 17.2529 5.74695 21.9166 11.4999 21.9166Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        );
    }
}
