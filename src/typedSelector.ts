import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { storeType } from './store/reducers/rootReducer';

const useTypedSelector : TypedUseSelectorHook<storeType> = useSelector;

export default useTypedSelector;
