import { Resource,FileTag } from "../models/resource.model";

import *  as ResourceFilterActions from "./filter-resource-list.actions";

const initialState = {
    totalResources: [ 
        new Resource(5,1,4,'resource-5-1-N-4',FileTag.New),
        new Resource(5,1,4,'resource-5-1-U-4',FileTag.Updated),
        new Resource(5,1,4,'resource-5-1-Us-4',FileTag.Used),
        new Resource(5,2,5,'resource-5-2-N-5',FileTag.New),
        new Resource(5,2,5,'resource-5-2-U-5',FileTag.Updated),
        new Resource(5,2,5,'resource-5-2-Us-5',FileTag.Used),
        new Resource(5,3,6,'resource-5-3-N-6',FileTag.New),
        new Resource(5,3,6,'resource-5-3-U-6',FileTag.Updated),
        new Resource(5,3,6,'resource-5-3-Us-6',FileTag.Used),
        new Resource(6,1,4,'resource-6-1-N-4',FileTag.New),
        new Resource(6,1,4,'resource-6-1-U-4',FileTag.Updated),
        new Resource(6,1,4,'resource-6-1-Us-4',FileTag.Used),
        new Resource(6,2,5,'resource-6-2-N-5',FileTag.New),
        new Resource(6,2,5,'resource-6-2-U-5',FileTag.Updated),
        new Resource(6,2,5,'resource-6-2-Us-5',FileTag.Used),
        new Resource(6,3,6,'resource-6-3-N-6',FileTag.New),
        new Resource(6,3,6,'resource-6-3-U-6',FileTag.Updated),
        new Resource(6,3,6,'resource-6-3-Us-6',FileTag.Used),
    ],
    filteredResources:[
        new Resource(5,1,4,'resource-5-1-N-4',FileTag.New),
        new Resource(5,1,4,'resource-5-1-U-4',FileTag.Updated),
        new Resource(5,1,4,'resource-5-1-Us-4',FileTag.Used),
    ]
};

export function resourceFilterByType(state = initialState,action:ResourceFilterActions.FilterActions) {

    switch(action.type) {
        case ResourceFilterActions.FILTER_BY_TYPE:
            return {
                ...state,
                filteredResources: state.totalResources.filter((resource) => resource.typeId == action.typeID),
            };
        case ResourceFilterActions.FILTER_BY_QBANK:
            return {
                ...state,
                filteredResources: state.totalResources.filter((resource) => resource.typeId == action.typeID && resource.qbankId == action.qbankID),
            };
        case ResourceFilterActions.FILTER_BY_STATUS:
            console.log(state.filteredResources);
            if(action.statusID === 0) {
                return {
                    ...state,
                    filteredResources: state.totalResources.filter((resource) => resource.typeId == action.typeID && resource.qbankId == action.qbankID && resource.fileTag === FileTag.New),
                }
            }
            else if(action.statusID === 1) {
                return {
                    ...state,
                    filteredResources: state.totalResources.filter((resource) => resource.typeId == action.typeID && resource.qbankId == action.qbankID && resource.fileTag === FileTag.Updated),
                }
            }
            else {
                return {
                    ...state,
                    filteredResources: state.totalResources.filter((resource) => resource.typeId == action.typeID && resource.qbankId == action.qbankID),
                }
            }
        default:
            return state;
    }

}