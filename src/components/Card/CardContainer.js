import {connect} from 'react-redux';
import {createActionRemoveCard} from '../../redux/cardsRedux';
import Card from '../Card/Card';

const mapDispatchToProps = (dispatch) => ({
  removeCard: id => dispatch(createActionRemoveCard({
    //columnId: props.id,
    id,
  })),

});

export default connect(null, mapDispatchToProps)(Card);