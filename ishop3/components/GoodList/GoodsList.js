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
            editGood: null,
            uniqueCode: 5,
            isDisableBtn: false
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
        this.setState({ editGood: editGood, detailMode: modes.edit, selectedCode: editGood.code })
    }

    formChanged = () => {
        this.setState({ isFromChanged: true })
    }

    disableBtn = (isDisableBtn) => {
        this.setState({ isDisableBtn: isDisableBtn })
    }

    addGood = () => {
        this.setState({
            editGood: { code: this.state.uniqueCode },
            detailMode: modes.add,
            selectedCode: null,
            uniqueCode: this.state.uniqueCode + 1
        })
    }

    saveGood = (newGood) => {
        let newGoodsArray;
        if (this.state.detailMode === modes.edit) {
            newGoodsArray = this.state.goodsArray.map(good => {
                if (good.code === newGood.code) {
                    good = newGood
                }
                return good
            })
        }
        if (this.state.detailMode === modes.add) {
            newGoodsArray = this.state.goodsArray.concat(newGood);
        }
        this.setState({ goodsArray: newGoodsArray, detailMode: modes.none, isFromChanged: false })

    }

    cancelGood = () => {
        this.setState({ detailMode: modes.none, isFromChanged: false })
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
                deleteSelectedRow={this.deleteRow}
                editSelectedRow={this.editRow}
                isFromChanged={this.state.isFromChanged}
                selectedMode={this.state.detailMode}
            />
        );

        let isAddMode = this.state.detailMode === modes.add;
        let isEditMode = this.state.detailMode === modes.edit;

        return (
            <React.Fragment>
                <table className='GoodsList'>
                    <caption className='ListCaption'>{this.props.tableName}</caption>
                    <thead><tr>{headers}</tr></thead>
                    <tbody>{goods}</tbody>
                </table>
                <div>
                    {
                        <input 
                        className='AddButton'
                        disabled={isAddMode || isEditMode}
                        type='button' 
                        value='Add good' 
                        onClick={this.addGood} />
                    }
                </div>
                <div>
                    {
                        (this.state.detailMode === modes.view) &&
                        <ViewGood good={this.state.selectedGood} />
                    }
                    {
                        (isAddMode || isEditMode) &&
                        <AddEditGood
                            key={this.state.editGood.code}
                            selectedGood={this.state.editGood}
                            initialGoodName={this.state.editGood.name}
                            mode={this.state.detailMode}
                            saveGood={this.saveGood}
                            cancelGood={this.cancelGood}
                            formChanged={this.formChanged}
                        />
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
