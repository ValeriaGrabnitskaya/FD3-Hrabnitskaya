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
            detailMode: null,
            isFromChanged: false,
            editGood: null
        };
    }

    rowSelected = (code) => {
        if (!this.state.isFromChanged) {
            let selectedGood = this.state.goodsArray.filter(good => good.code === code)[0];
            this.setState({ selectedCode: code, selectedGood: selectedGood, detailMode: modes.view })
        }
    }

    deleteRow = (code) => {
        let answer = confirm(this.props.question);
        if (answer) {
            let filteredArray = this.state.goodsArray.filter(element => element.code !== code);
            this.setState({ goodsArray: filteredArray })
        }
    }

    editRow = (editGood) => {
        this.setState({ editGood: editGood, detailMode: modes.edit, selectedCode: null })
    }

    formChanged = () => {
        this.setState({ isFromChanged: true })
    }

    addGood = () => {
        this.setState({ detailMode: modes.add, selectedCode: null })
    }

    saveGood = (newGood) => {
        let newGoodsArray = this.state.goodsArray.concat(newGood);
        this.setState({ goodsArray: newGoodsArray, detailMode: modes.none })
    }

    cancelGood = () => {
        this.setState({ detailMode: modes.none })
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
                isSelected={this.state.selectedCode === good.code && !this.state.isFromChanged ? true : false}
                deleteSelectedRow={this.deleteRow}
                editSelectedRow={this.editRow}
            />
        );

        return (
            <React.Fragment>
                <table className='GoodsList'>
                    <caption className='ListCaption'>{this.props.tableName}</caption>
                    <thead><tr>{headers}</tr></thead>
                    <tbody>{goods}</tbody>
                </table>
                <div>
                    {
                        (this.state.detailMode !== modes.add) &&
                        <input className='AddButton' type='button' value='Add good' onClick={this.addGood} />
                    }
                </div>
                <div>
                    {
                        (this.state.detailMode === modes.view) &&
                        <ViewGood good={this.state.selectedGood} />
                    }
                    {
                        (this.state.detailMode === modes.add || this.state.detailMode === modes.edit) &&
                        <AddEditGood selectedGood={this.state.editGood} mode={this.state.detailMode} saveGood={this.saveGood} cancelGood={this.cancelGood} formChanged={this.formChanged} />
                    }
                </div>
            </React.Fragment>
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
