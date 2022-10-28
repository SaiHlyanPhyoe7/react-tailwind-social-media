import {configureStore} from "@reduxjs/toolkit";
import inputSlicer from "../components/slicers/EcommerceNavbarSlicer";
import calcSlicer from "../components/slicers/EcmeCalculationSlicer";

export const store = configureStore({
    reducer: {
        navInput : inputSlicer,
        calc : calcSlicer
    }
})