// @ts-nocheck

export const blueClient = {
    root: {},

    button: {
        position: 'relative',
        background: 'linear-gradient(to right, mediumblue, dodgerblue, aqua)',
        fontSize: 20,
        fontStyle: 'italic',
        lineHeight: '30px',
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 5,
        padding: [5, 20],

        '&:hover': {
            background: 'linear-gradient(to left, mediumblue, dodgerblue, aqua)',

            '&:after': {
                content: "''",
                position: 'absolute',
                top: '50%',
                left: 5,
                display: 'block',
                height: 10,
                width: 10,
                background: 'yellow',
                borderRadius: '50%',
                transform: 'translateY(-50%)'
            }
        }
    }
};