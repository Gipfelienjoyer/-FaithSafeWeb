import happyCustomer1 from '../05-assets/happyCustomer1.png';
import {Box as MuiBox, styled} from '@mui/material';

const Box = styled(MuiBox)(() => ({
    padding: 3,
    border: '1px solid white',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));

export default function HappyCustomer1() {
    return (
        <Box>
            <img
                src={happyCustomer1}
                alt="Happy Customer"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Box>
    )
}
