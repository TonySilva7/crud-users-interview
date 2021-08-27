import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// INPUTS
export const InputLogin = withStyles((theme) => ({
	root: {
		// width: 200,
		marginTop: '0.3rem',
		display: 'flex',

		'& .MuiInputBase-root': {
			color: '#344055',
			fontSize: '1.2rem',
			backgroundColor: '#eee6',
			height: 60,
			boxSizing: 'border-box',
		},
		'& label': {
			color: '#7a75bc',
		},
		'& label.Mui-focused': {
			color: '#344055',
		},
		// '& .MuiInput-underline:after': {
		// 	borderBottomColor: 'orange',
		// },
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#7a75bc',
			},
			'&:hover fieldset': {
				borderColor: '#BBE9F9',
				transition: 'all 300ms ease',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#eaeaec',
			},
		},
	},
}))(TextField);

// BUTTONS
export const ButtonSign = withStyles({
	root: {
		height: '3.7rem',
		width: '15rem',
		// marginTop: '-0.5rem',
		borderRadius: '0 0 1rem 1rem',

		padding: '6px 12px',
		fontSize: '1.2rem',
		lineHeight: 1.5,

		color: '#eaeaec',
		backgroundColor: '#7a75bc',
		transition: 'all 300ms ease',
		opacity: '.8',

		'&:hover': {
			backgroundColor: '#7a75bc',
			color: '#eaeaec',
			boxShadow: 'none',
			opacity: '1',
			transform: 'scale(1.05)',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
		},
		'&:focus': {
			// boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	},
})(Button);
