import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceData, PlaceState } from '../../types/place.type';

const initialState: PlaceState = {
  data: [], // 장소 전체 데이터
  searchPlaceResults: [], // 장소 검색 결과
  searchInputPlace: '', // 검색하려는 장소명
  transformedResults: [],
  selectedPlace: {
    id: 0,
    bplcnm: '',
    type: '',
    sitewhladdr: '',
    rdnwhladdr: '',
    sitetel: '',
    x: null,
    y: null,
    dtlstatenm: '',
  },
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setSearchInputPlace(state, action: PayloadAction<string>) {
      state.searchInputPlace = action.payload;
    },
    setResults(state, action: PayloadAction<PlaceData[]>) {
      state.searchPlaceResults = action.payload;
    },
    setTransformedResults(state, action: PayloadAction<PlaceData[]>) {
      state.transformedResults = action.payload;
    },
    setSelectPlace(state, action: PayloadAction<PlaceData>) {
      state.selectedPlace = action.payload;
    },
  },
});

export const {
  setSearchInputPlace,
  setResults,
  setTransformedResults,
  setSelectPlace,
} = placeSlice.actions;
export const placeReducer = placeSlice.reducer;
