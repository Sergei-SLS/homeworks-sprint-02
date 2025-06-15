const initState= {
    themeId: 1 as number,
}

type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number,
}

type actionType = changeThemeIdActionType

export const themeReducer = (state = initState, action: actionType) => { // fix any
    switch (action.type) {
            case 'SET_THEME_ID':
                return { ...state, themeId: action.id}
            default:
                return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
