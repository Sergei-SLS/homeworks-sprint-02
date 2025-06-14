const initState: themeStateType = {
    themeId: 1,
}

type themeStateType = {
    themeId: number,
}

type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number,
}

type actionType = changeThemeIdActionType

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
