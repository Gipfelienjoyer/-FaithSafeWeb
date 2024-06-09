import {Box as MuiBox, styled} from '@mui/material';

const Box = styled(MuiBox)(() => ({
    padding: '0.75em',
    border: '1px solid white',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: '1.5em',
}));

interface ListImageProps {
    imgSrc: string
    imgAlt: string
}

export default function ListImage({imgSrc, imgAlt}: ListImageProps) {
    return (
        <Box>
            <img
                src={imgSrc}
                alt={imgAlt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '1em'
                }}
            />
        </Box>
    )
}
