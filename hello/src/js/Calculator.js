import React from 'react';
import '../css/calculator.css'

const Calculator = () => {
    return (
        <div className='calc'>
            <div className='display'></div>

            <div className='buttons'>
                <div className='button'>%</div>
                <div className='button'>CE</div>
                <div className='button'>ON</div>
                <div className='button'>OFF</div>
                <div className='button'>7</div>
                <div className='button'>8</div>
                <div className='button'>9</div>
                <div className='button'>÷</div>
                <div className='button'>4</div>
                <div className='button'>5</div>
                <div className='button'>6</div>
                <div className='button'>x</div>
                <div className='button'>1</div>
                <div className='button'>2</div>
                <div className='button'>3</div>
                <div className='button'>-</div>
                <div className='button'>0</div>
                <div className='button'>.</div>
                <div className='button'>=</div>
                <div className='button'>+</div>
            </div>
        </div>
    );
};

export default Calculator;