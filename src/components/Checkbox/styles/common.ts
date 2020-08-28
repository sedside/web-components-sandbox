// @ts-nocheck

export const common = {
    root: {},

    label: {
        position: 'relative',
        marginLeft: 12,    

        '&:before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            top: 4,
            width: 10,
            height: 10,
            background: 'grey'
        }
    },

    checked: {
        '&:before': {
            background: 'dimgray'
        }
    },

    input: {
        visibility: 'hidden',
        position: 'absolute'
    }
};