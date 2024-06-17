import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DownloadTitle() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // Ensures that the content is centered vertically
                width: '100%', // Ensure the container takes full width
                padding: 2, // Adds some padding to ensure the content is not too tight to the edges
            }}
        >
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                <Typography
                    variant={isMobile ? 'h3' : 'h2'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center', // Ensures that the text is centered
                        textAlign: 'center',
                        flexWrap: 'wrap', // Ensure text wraps within the flex container
                        '& span:nth-of-type(1)': {
                            color: 'black'
                        },
                        '& span:nth-of-type(2)': {
                            color: '#9303EB'
                        },
                        '& span:nth-of-type(3)': {
                            color: 'black'
                        }
                    }}
                >
                    <span>Download&nbsp;</span> <span>Faithsafe&nbsp;</span> <span>now</span>
                </Typography>
                <Typography
                    textAlign="center"
                    color="text.secondary"
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                >
                    Explore our cutting-edge Password-Manager, delivering high-quality solutions
                    tailored to your needs. Elevate your experience with top-tier features
                    and services.
                </Typography>
            </Stack>
        </Container>
    );
}
