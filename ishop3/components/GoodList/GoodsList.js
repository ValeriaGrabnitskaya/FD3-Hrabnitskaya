import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';
import GoodItem from './GoodItem/GoodItem';
import ViewGood from '../ViewGood/ViewGood';
import modes from '../../static-data/mode';
import AddEditGood from '../AddEditGood/AddEditGood';

class GoodsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsArray: props.goodsArray,
            selectedCode: null,
            selectedGood: null,
            detailMode: null
        };
    }

    rowSelected = (code) => {
        let selectedGood = this.state.goodsArray.filter(good => good.code === code)[0];
        this.setState({ selectedCode: code, selectedGood: selectedGood, detailMode: modes.view })
    }

    deleteRow = (code) => {
        let answer = confirm(this.props.question);
        if (answer) {
            let filteredArray = this.state.goodsArray.filter(element => element.code !== code);
            this.setState({ goodsArray: filteredArray })
        }
    }

    addGood = () => {
        this.setState({ detailMode: modes.add })
    }

    render() {
        var headers = this.props.tableHeaders.map(header =>
            <th key={header.id} className='TableHeader'>{header.name}</th>
        );
        var goods = this.state.goodsArray.map(good =>
            <GoodItem
                key={good.code}
                good={good}
                rowWasSelected={this.rowSelected}
                isSelected={this.state.selectedCode === good.code ? true : false}
                deleteSelecredRow={this.deleteRow}
            />
        );

        return (
            <div className="Container">
                <table className='GoodsList'>
                    <caption className='ListCaption'>{this.props.tableName}</caption>
                    <thead><tr>{headers}</tr></thead>
                    <tbody>{goods}</tbody>
                </table>
                <input className='AddButton' type='button' value='Add good' onClick={this.addGood} />
                {
                    (this.state.detailMode === modes.view) &&
                    <ViewGood good={this.state.selectedGood} />
                }
                {
                    (this.state.detailMode === modes.add) &&
                    <AddEditGood />
                }
            </div>
        )
    }
}

GoodsList.propTypes = {
    tableName: PropTypes.string.isRequired,
    tableHeaders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    question: PropTypes.string.isRequired
}

export default GoodsList;
