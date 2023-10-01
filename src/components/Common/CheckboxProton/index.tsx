import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
  wrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    textAlign: 'left',
    fontSize: '.8rem',
  },
});


const CheckboxProton = ({ changeChecked, items }: any) => {
  const classes = useStyles();
  const { checked, id, desc } = items;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={desc}
      />
    </div>
  );
};

export default CheckboxProton;