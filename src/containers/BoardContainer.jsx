import React from 'react';
import Board from '../components/Board';
import { setColumn } from '../actions/columnsActions';
import { connect } from 'react-redux';
import { getColumnsList } from '../selectors/selectors';
class BoardContainer extends React.Component {
  addColumn = () => {
    let newId = 0;
    this.props.columnsList.forEach((item) => {
      let itemId = Number(item.id);
      if (itemId >= newId) {
        newId = itemId + 1;
      }
    });
    const newKey = Math.floor(Math.random() * 10000);
    let columnData = {
      id: newId,
      key: newKey,
      title: '',
      isColumnActive: false,
      isEditColumnTitle: true,
      isMenuActive: false,
    };
    this.props.setColumn({ columnData });
  };

  render() {
    return <Board addColumn={this.addColumn} columnsList={this.props.columnsList} />;
  }
}
const mapStateToProps = (state) => {
  return {
    columnsList: getColumnsList(state),
  };
};

const mapDispatchToProps = {
  setColumn,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
